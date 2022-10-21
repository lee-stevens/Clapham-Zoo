using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class AnimalsController : ControllerBase
  {
    private readonly DataContext _context;
    public AnimalsController(DataContext context)
    {
      _context = context;
    }

    //E.g. api/animals/
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Animals>>> GetAnimals() //Use <List> if you want to filtering etc...
    {
        return await _context.Animals.ToListAsync();
    }

    //E.g. api/animals/1
    [HttpGet("{id}")]
    public async Task<ActionResult<Animals>> GetAnimal(int id) //Use <List> if you want to filtering etc...
    {
        return await _context.Animals.FindAsync(id);
    }
  }
}