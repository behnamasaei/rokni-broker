import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ToastModule} from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

 const PrimeModule = [
  TableModule,
  ToolbarModule,
  ButtonModule,
  DynamicDialogModule,
  ToastModule,
  ConfirmDialogModule
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
