import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import {FieldsetModule} from 'primeng/fieldset';

const PrimeModule = [
  TableModule,
  ToolbarModule,
  ButtonModule,
  DynamicDialogModule,
  ToastModule,
  ConfirmDialogModule,
  DropdownModule,
  InputTextModule,
  CalendarModule,
  SliderModule,
  MultiSelectModule,
  ContextMenuModule,
  DialogModule,
  ProgressBarModule,
  RatingModule,
  FieldsetModule,
]

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    ...PrimeModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    ...PrimeModule
  ]
})
export class SharedModule { }
