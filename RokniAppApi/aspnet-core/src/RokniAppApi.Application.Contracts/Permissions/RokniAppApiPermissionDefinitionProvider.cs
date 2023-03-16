using RokniAppApi.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace RokniAppApi.Permissions;

public class RokniAppApiPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(RokniAppApiPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(RokniAppApiPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<RokniAppApiResource>(name);
    }
}
