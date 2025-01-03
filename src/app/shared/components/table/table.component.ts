import { Component, Input, OnInit } from '@angular/core';
import { IReservation } from 'src/app/features/reservations/models/reservations.interface';
import { ReservationsService } from 'src/app/features/reservations/services/reservations.service';
import { Space } from 'src/app/features/spaces/models/space.models';
import { SpaceService } from 'src/app/features/spaces/services/space.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  dataSource!: any[];
  @Input()
  param!: string;
  @Input()
  dataSourceColumn!: {
    dataField: keyof any;
    caption: string;
    filterValue?: any;
  }[];
  backDataSource: any[] = [];

  collapsed = false;

  constructor(
    private reservationsService: ReservationsService,
    private spaceService: SpaceService
  ) { }
  ngOnInit(): void {
    this.backDataSource = this.dataSource;
  }

  delete(id: string) {
    switch (this.param) {
      case 'spaces':
        this.spaceService.deleteSpace(id).subscribe(() => {
          this.dataSource = this.dataSource.filter(r => r.id !== id);
        });
        break;
      case 'reservations':
        this.reservationsService.deleteReservations(id).subscribe(() => {
          this.dataSource = this.dataSource.filter(r => r.id !== id);
        });
        break;

      default:
        break;
    }
  }

  cleanFilter() {
    this.dataSource = this.backDataSource;
    this.dataSourceColumn.forEach(column => column.filterValue = '');
    this.collapsed = false;
  }

  filterData() {
    this.dataSource = this.dataSource.filter(row => {
      return this.dataSourceColumn.every(column => {
        if (column.filterValue.length > 0) {
          return row[column.dataField]?.toString().toLowerCase().includes(column.filterValue.toLowerCase());
        }
        return true;
      });
    });
  }
}