using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
  public class AppLicationContext : DbContext
  {
    protected readonly IConfiguration Configuration;

    public AppLicationContext(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
      // connect to sqlite database
      options.UseSqlite(Configuration.GetConnectionString("WebApiDatabase"));
    }

    public DbSet<Industry> industries { get; set; }
  }
}