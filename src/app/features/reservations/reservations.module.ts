import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { ListReservationsComponent } from './components/list-reservations/list-reservations.component';
import { ReservationsListPage } from './pages/reservations-list/reservations-list.page';
import { RegisterReservationPage } from './pages/register-reservation/register-reservation.page';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    ListReservationsComponent,
    ReservationsListPage,
    RegisterReservationPage
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReservationsRoutingModule,
    SharedModule
]
})
export class ReservationsModule { }
