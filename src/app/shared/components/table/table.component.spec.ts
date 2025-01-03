import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { ReservationsService } from 'src/app/features/reservations/services/reservations.service';
import { of } from 'rxjs';
import { IReservation } from 'src/app/features/reservations/models/reservations.interface';
import { By } from '@angular/platform-browser';

describe('TableComponent', () => {
    let component: TableComponent;
    let fixture: ComponentFixture<TableComponent>;
    let reservationsService: ReservationsService;

    const mockDataSource: IReservation[] = [
        { id: '1', userName: 'Joel', spaceName: 'Sala de Conferencias A', startDate: '2025-01-01', endDate: '2025-01-01 ' },
        { id: '2', userName: 'Joel', spaceName: 'Auditorio', startDate: '2025-01-02', endDate: '2025-01-01' }
    ];

    const mockDataSourceColumn = [
        { dataField: 'userName', caption: 'Nombre Usuario', filterValue: '' },
        { dataField: 'spaceName', caption: 'Nombre Espacio', filterValue: '' },
        { dataField: 'startDate', caption: 'Fecha Inicial', filterValue: '' },
        { dataField: 'endDate', caption: 'Fecha final', filterValue: '' }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TableComponent],
            providers: [
                {
                    provide: ReservationsService,
                    useValue: {
                        deleteReservations: jasmine.createSpy().and.returnValue(of({}))
                    }
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
        reservationsService = TestBed.inject(ReservationsService);

        component.dataSource = mockDataSource;
        fixture.detectChanges();
    });

    it('should render the table with data when dataSource is provided', () => {
        const tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));
        expect(tableRows.length).toBe(2); // Should match the number of items in the mockDataSource
    });

    it('should display "No hay datos" when there are no rows in dataSource', () => {
        component.dataSource = [];
        fixture.detectChanges();
        const noDataMessage = fixture.debugElement.query(By.css('.flex.justify-center h1'));
        expect(noDataMessage.nativeElement.textContent).toBe(' No hay datos');
    });
});
