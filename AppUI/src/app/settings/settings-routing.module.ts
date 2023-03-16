import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndustrySettingComponent } from './industry-setting/industry-setting.component';
import { StockSettingComponent } from './stock-setting/stock-setting.component';

const routes: Routes = [
  { path: 'industry', component: IndustrySettingComponent },
  { path: 'stock', component: StockSettingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
