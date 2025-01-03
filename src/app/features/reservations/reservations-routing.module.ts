import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsListPage } from './pages/reservations-list/reservations-list.page';
import { RegisterReservationPage } from './pages/register-reservation/register-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: ReservationsListPage
  },
  {
    path: 'create',
    component: RegisterReservationPage
  },
  { path: 'edit/:id', component: RegisterReservationPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
