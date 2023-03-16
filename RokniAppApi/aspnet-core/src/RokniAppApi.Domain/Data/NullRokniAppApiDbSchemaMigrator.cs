using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace RokniAppApi.Data;

/* This is used if database provider does't define
 * IRokniAppApiDbSchemaMigrator implementation.
 */
public class NullRokniAppApiDbSchemaMigrator : IRokniAppApiDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
