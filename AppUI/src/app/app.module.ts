import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeedDialModule } from 'primeng/speeddial';
import { TooltipModule } from 'primeng/tooltip';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from './shared.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpeedDialModule,
    TooltipModule,
    MenubarModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    SharedModule,
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
