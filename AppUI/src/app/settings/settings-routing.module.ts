import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndustrySettingComponent } from './industry-setting/industry-setting.component';

const routes: Routes = [
  { path: 'industry', component: IndustrySettingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
