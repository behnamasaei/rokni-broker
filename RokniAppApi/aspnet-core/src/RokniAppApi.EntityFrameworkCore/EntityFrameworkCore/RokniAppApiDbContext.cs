﻿using Microsoft.EntityFrameworkCore;
using RokniAppApi.Domain.NoteModel;
using RokniAppApi.IndustryModel;
using RokniAppApi.StockModel;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement;
using Volo.Abp.TenantManagement.EntityFrameworkCore;

namespace RokniAppApi.EntityFrameworkCore;

[ReplaceDbContext(typeof(IIdentityDbContext))]
[ReplaceDbContext(typeof(ITenantManagementDbContext))]
[ConnectionStringName("Default")]
public class RokniAppApiDbContext :
    AbpDbContext<RokniAppApiDbContext>,
    IIdentityDbContext,
    ITenantManagementDbContext
{
  /* Add DbSet properties for your Aggregate Roots / Entities here. */

  #region Entities from the modules

  /* Notice: We only implemented IIdentityDbContext and ITenantManagementDbContext
   * and replaced them for this DbContext. This allows you to perform JOIN
   * queries for the entities of these modules over the repositories easily. You
   * typically don't need that for other modules. But, if you need, you can
   * implement the DbContext interface of the needed module and use ReplaceDbContext
   * attribute just like IIdentityDbContext and ITenantManagementDbContext.
   *
   * More info: Replacing a DbContext of a module ensures that the related module
   * uses this DbContext on runtime. Otherwise, it will use its own DbContext class.
   */

  //Identity
  public DbSet<IdentityUser> Users { get; set; }
  public DbSet<IdentityRole> Roles { get; set; }
  public DbSet<IdentityClaimType> ClaimTypes { get; set; }
  public DbSet<OrganizationUnit> OrganizationUnits { get; set; }
  public DbSet<IdentitySecurityLog> SecurityLogs { get; set; }
  public DbSet<IdentityLinkUser> LinkUsers { get; set; }

  // Tenant Management
  public DbSet<Tenant> Tenants { get; set; }
  public DbSet<TenantConnectionString> TenantConnectionStrings { get; set; }

  #endregion

  public RokniAppApiDbContext(DbContextOptions<RokniAppApiDbContext> options)
      : base(options)
  {

  }

  public DbSet<Industry> Industries { get; set; }
  public DbSet<Stock> Stocks { get; set; }
  public DbSet<IndustryNotebook> industryNotebooks { get; set; }
  public DbSet<StockNotebook> stockNotebooks { get; set; }


  protected override void OnModelCreating(ModelBuilder builder)
  {
    base.OnModelCreating(builder);

    /* Include modules to your migration db context */

    builder.ConfigurePermissionManagement();
    builder.ConfigureSettingManagement();
    builder.ConfigureBackgroundJobs();
    builder.ConfigureAuditLogging();
    builder.ConfigureIdentity();
    builder.ConfigureOpenIddict();
    builder.ConfigureFeatureManagement();
    builder.ConfigureTenantManagement();

    /* Configure your own tables/entities inside here */

    builder.Entity<IndustryNotebook>(b =>
    {
      b.ToTable(RokniAppApiConsts.DbTablePrefix + "IndustryNotebook", RokniAppApiConsts.DbSchema);
      b.ConfigureByConvention(); //auto configure for the base class props
      b.HasOne(e => e.Industry).WithOne(e => e.IndustryNotebook).HasForeignKey<Industry>(e => e.IndustryNotebookId).IsRequired();
    });

    builder.Entity<StockNotebook>(b =>
    {
      b.ToTable(RokniAppApiConsts.DbTablePrefix + "StockNotebook", RokniAppApiConsts.DbSchema);
      b.ConfigureByConvention(); //auto configure for the base class props
      b.HasOne(e => e.Stock).WithOne(e => e.StockNotebook).HasForeignKey<Stock>(e => e.StockNotebookId).IsRequired();

    });

    builder.Entity<Industry>(b =>
    {
      b.ToTable(RokniAppApiConsts.DbTablePrefix + "Industry", RokniAppApiConsts.DbSchema);
      b.ConfigureByConvention(); //auto configure for the base class props
      b.HasMany(e => e.Stocks).WithOne(e => e.Industry).HasForeignKey(e => e.IndustryId).IsRequired();
      b.HasOne(e => e.IndustryNotebook).WithOne(e => e.Industry).HasForeignKey<Industry>(e => e.IndustryNotebookId).IsRequired();
    });

    builder.Entity<Stock>(b =>
    {
      b.ToTable(RokniAppApiConsts.DbTablePrefix + "Stock", RokniAppApiConsts.DbSchema);
      b.ConfigureByConvention(); //auto configure for the base class props
      b.HasOne(e => e.Industry).WithMany(e => e.Stocks).HasForeignKey(e => e.IndustryId).IsRequired();
      b.HasOne(e => e.StockNotebook).WithOne(e => e.Stock).HasForeignKey<Stock>(e => e.StockNotebookId).IsRequired();
    });
  }
}
