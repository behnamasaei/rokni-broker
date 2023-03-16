using RokniAppApi.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace RokniAppApi.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(RokniAppApiEntityFrameworkCoreModule),
    typeof(RokniAppApiApplicationContractsModule)
    )]
public class RokniAppApiDbMigratorModule : AbpModule
{

}
