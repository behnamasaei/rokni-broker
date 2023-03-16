using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using RokniAppApi.Data;
using Volo.Abp.DependencyInjection;

namespace RokniAppApi.EntityFrameworkCore;

public class EntityFrameworkCoreRokniAppApiDbSchemaMigrator
    : IRokniAppApiDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreRokniAppApiDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the RokniAppApiDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<RokniAppApiDbContext>()
            .Database
            .MigrateAsync();
    }
}
