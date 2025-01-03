// shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToastComponent } from './components/toast/toast.component';
import { DxSchedulerModule, DxDataGridModule, DxTemplateModule, DxBulletModule, DxToastModule } from 'devextreme-angular';
import { ReservationsRoutingModule } from '../features/reservations/reservations-routing.module';
import { FormReservationsComponent } from './components/forms/form-reservations/form-reservations.component';

@NgModule({
  declarations: [TableComponent, CalendarComponent, NavbarComponent, ToastComponent, FormReservationsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DxSchedulerModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxToastModule,
    ReservationsRoutingModule,
    FormsModule
  ],
  exports: [
    TableComponent,
    CalendarComponent,
    NavbarComponent,
    ToastComponent,
    FormReservationsComponent
  ],
})
export class SharedModule { }
