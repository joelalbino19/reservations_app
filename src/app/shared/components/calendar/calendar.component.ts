import { Component, Input } from '@angular/core';
import { ReservationsService } from 'src/app/features/reservations/services/reservations.service';
import { IReservation } from 'src/app/features/reservations/models/reservations.interface';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    providers: [ReservationsService],
})
export class CalendarComponent {
    @Input()
    dataSource!: IReservation[];


    constructor() {
    }
}
