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
import { HomeComponent } from './home/home.component';
import { SafaIframePipe } from './Shared/safa-iframe.pipe';
import { IframeModalComponent } from './iframe-modal/iframe-modal.component';
import { IndustryPageComponent } from './industry-page/industry-page.component';
import { NotebookComponent } from './Notebook/Notebook.component';
import { ChoosenComponent } from './Choosen/Choosen.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    IframeModalComponent,
    SafaIframePipe,
    IndustryPageComponent,
    NotebookComponent,
      ChoosenComponent
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
