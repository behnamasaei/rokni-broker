import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { IndustrySettingComponent } from './industry-setting/industry-setting.component';
import { SharedModule } from '../shared.module';
import { IndustryModalComponent } from './industry-setting/industry-modal/industry-modal.component';
import { StockSettingComponent } from './stock-setting/stock-setting.component';
import { StockModalComponent } from './stock-setting/stock-modal/stock-modal.component';

@NgModule({
  declarations: [
    SettingsComponent,
    IndustrySettingComponent,
    IndustryModalComponent,
    StockSettingComponent,
    StockModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    SettingsRoutingModule,
    SharedModule
  ],
  bootstrap: [SettingsComponent]
})
export class SettingsModule { }
