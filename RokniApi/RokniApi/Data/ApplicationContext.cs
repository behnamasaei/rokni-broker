using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RokniApi.Models;

namespace RokniApi.Data
{
  public class ApplicationContext : DbContext
  {
    protected readonly IConfiguration Configuration;
    public string DbPath { get; }
    public ApplicationContext()
    {
      var folder = Environment.SpecialFolder.LocalApplicationData;
      var path = Environment.GetFolderPath(folder);
      DbPath = System.IO.Path.Join(path, "RokniDb.db");
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
      // connect to sqlite database
      options.UseSqlite($"Data Source={DbPath}");
    }

    public DbSet<Industry> industries { get; set; }
  }
}