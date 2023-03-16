using Volo.Abp.Settings;

namespace RokniAppApi.Settings;

public class RokniAppApiSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(RokniAppApiSettings.MySetting1));
    }
}
