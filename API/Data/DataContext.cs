using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Animal> Animals { get; set; }
    public DbSet<AppUser> AppUsers { get; set; }
  }
}