using RokniAppApi.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace RokniAppApi;

[DependsOn(
    typeof(RokniAppApiEntityFrameworkCoreTestModule)
    )]
public class RokniAppApiDomainTestModule : AbpModule
{

}
