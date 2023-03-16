using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace RokniAppApi;

[Dependency(ReplaceServices = true)]
public class RokniAppApiBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "RokniAppApi";
}
