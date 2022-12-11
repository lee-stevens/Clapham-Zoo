using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
  public class AppUsersController : BaseApiController
    {
    private readonly DataContext _context;
    public AppUsersController(DataContext context)
    {
        _context = context;
    }
        
    [HttpGet]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetAppUsers() //Use <List> if you want to filtering etc...
    {
      return await _context.AppUsers.ToListAsync();
    }

    [Authorize]
    [HttpGet("{id}")]
    public async Task<ActionResult<AppUser>> GetAppUser(int id) //Use <List> if you want to filtering etc...
    {
      return await _context.AppUsers.FindAsync(id);
    }
  }
}