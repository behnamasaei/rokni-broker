using System.Threading.Tasks;

namespace RokniAppApi.Data;

public interface IRokniAppApiDbSchemaMigrator
{
    Task MigrateAsync();
}
