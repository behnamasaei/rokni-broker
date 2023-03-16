using System;
using System.Collections.Generic;
using System.Text;
using RokniAppApi.Localization;
using Volo.Abp.Application.Services;

namespace RokniAppApi;

/* Inherit your application services from this class.
 */
public abstract class RokniAppApiAppService : ApplicationService
{
    protected RokniAppApiAppService()
    {
        LocalizationResource = typeof(RokniAppApiResource);
    }
}
