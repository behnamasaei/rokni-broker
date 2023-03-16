using RokniAppApi.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace RokniAppApi.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class RokniAppApiController : AbpControllerBase
{
    protected RokniAppApiController()
    {
        LocalizationResource = typeof(RokniAppApiResource);
    }
}
