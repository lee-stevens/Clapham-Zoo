using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
  public class AnimalsController : BaseApiController
  {
    private readonly DataContext _context;
    public AnimalsController(DataContext context)
    {
      _context = context;
    }

    //E.g. api/animals/
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Animal>>> GetAnimals() //Use <List> if you want to filtering etc...
    {
      return await _context.Animals.ToListAsync();
    }

    //E.g. api/animals/1
    [HttpGet("{id}")]
    public async Task<ActionResult<Animal>> GetAnimal(int id)
    {
      return await _context.Animals.FindAsync(id);
    }
    
    [HttpPost]
    public async Task<ActionResult<Animal>> AddAnimal(Animal animal)
    {
      _context.Animals.Add(animal);
      await _context.SaveChangesAsync();
      Console.WriteLine(animal.CommonName + " added.");
      return animal;
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<Animal>> DeleteAnimal(int id){
      try{
        var animalToDelete = await _context.Animals.FindAsync(id);
        if(animalToDelete == null){
          return NotFound($"Animal with Id: {id} was not found, and therefore, not deleted.");
        }
        return animalToDelete;
      }
      catch(Exception){
        return StatusCode(StatusCodes.Status500InternalServerError, $"Error deleting Animal {id}" );
      }
    }
  }
}