import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../services/reservations.service';
import { IReservation } from '../../models/reservations.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.scss'],
})
export class ListReservationsComponent implements OnInit {
  reservations: IReservation[] = [];
  reservationsColumn: {
    dataField: keyof IReservation;
    caption: string;
    filterValue: string
  }[] = [
      {
        dataField: 'userName',
        caption: 'Usuario',
        filterValue: '',
      },
      {
        dataField: 'spaceName',
        caption: 'Espacio',
        filterValue: '',
      },
      {
        dataField: 'startDate',
        caption: 'Fecha inicio',
        filterValue: '',
      },
      {
        dataField: 'endDate',
        caption: 'Fecha fin',
        filterValue: '',
      }
    ];
    
  changeView: boolean = true;
  constructor(private reservationsService: ReservationsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadSpaces();
  }

  loadSpaces() {
    this.reservationsService.getReservations().subscribe(
      {
        next: (data: IReservation[]) => {
          this.reservations = data;
          this.reservationsService.reservationsListDT = data;
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      }
    );
  }
  changeViewCalendar() {
    this.changeView = !this.changeView
  }
  createReservation() {
    this.router.navigate(['/reservations/create']);
  }
}