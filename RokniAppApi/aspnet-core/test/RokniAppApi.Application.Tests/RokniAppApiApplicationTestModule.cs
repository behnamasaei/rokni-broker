using Volo.Abp.Modularity;

namespace RokniAppApi;

[DependsOn(
    typeof(RokniAppApiApplicationModule),
    typeof(RokniAppApiDomainTestModule)
    )]
public class RokniAppApiApplicationTestModule : AbpModule
{

}
