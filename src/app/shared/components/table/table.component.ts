import { Component, Input, OnInit } from '@angular/core';
import { IReservation } from 'src/app/features/reservations/models/reservations.interface';
import { ReservationsService } from 'src/app/features/reservations/services/reservations.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  dataSource!: IReservation[];
  @Input()
  dataSourceColumn!: {
    dataField: keyof IReservation;
    caption: string;
    filterValue: string;
  }[];
  filteredDataSource: IReservation[] = [];

  collapsed = false;

  constructor(private reservationsService: ReservationsService) { }
  ngOnInit(): void {
    this.filteredDataSource = [...this.dataSource];
  }

  deleteReservation(id: string) {
    this.reservationsService.deleteReservations(id).subscribe(() => {
      this.dataSource = this.dataSource.filter(r => r.id !== id);
    });
  }

  filterData() {
    this.filteredDataSource = this.dataSource.filter(row => {
      return this.dataSourceColumn.every(column => {
        if (column.filterValue.length > 0) {
          return row[column.dataField]?.toString().toLowerCase().includes(column.filterValue.toLowerCase());
        }
        return true;
      });
    });
  }
}