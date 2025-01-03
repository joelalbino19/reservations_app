import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { ReservationsService } from 'src/app/features/reservations/services/reservations.service';
import { FormReservationsComponent } from './form-reservations.component';

describe('FormReservationsComponent', () => {
  let component: FormReservationsComponent;
  let fixture: ComponentFixture<FormReservationsComponent>;
  let mockReservationService: jasmine.SpyObj<ReservationsService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: ActivatedRoute;

  beforeEach(async () => {
    mockReservationService = jasmine.createSpyObj('ReservationsService', [
      'getUsers',
      'getSpaces',
      'createreservations',
    ]);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue(null), // Simular sin id por defecto
        },
      },
    } as unknown as ActivatedRoute;

    await TestBed.configureTestingModule({
      declarations: [FormReservationsComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: ReservationsService, useValue: mockReservationService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form values', () => {
    const form = component.reservationForm;
    expect(form.value).toEqual({
      userId: '',
      spaceId: '',
      startDate: '',
      endDate: '',
    });
  });

  it('should call getUsers and getSpaces on initialization', () => {
    mockReservationService.getUsers.and.returnValue(of([]));
    mockReservationService.getSpaces.and.returnValue(of([]));

    component.ngOnInit();

    expect(mockReservationService.getUsers).toHaveBeenCalled();
    expect(mockReservationService.getSpaces).toHaveBeenCalled();
  });

  it('should navigate back to reservations when onBack is called', () => {
    component.onBack();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/reservations']);
  });

  it('should populate the form in edit mode if reservationId exists', () => {
    mockActivatedRoute.snapshot.paramMap.get.and.returnValue('1');
    const mockReservation = {
      id: '1',
      userId: '2',
      spaceId: '3',
      spaceName: 'Sala de Reuniones B',
      userName: 'María López',
      startDate: '2025-01-01',
      endDate: '2025-01-02',
    };
    mockReservationService.reservationsListDT = [mockReservation];

    component.filterSpace();

    expect(component.isEditMode).toBeTrue();
    expect(component.reservationForm.value).toEqual({
      id: '2',
      userId: '2',
      spaceId: '3',
      spaceName: 'Sala de Reuniones B',
      userName: 'María López',
      startDate: '2025-01-01',
      endDate: '2025-01-02',
    });
  });

  it('should show error message on reservation creation failure', () => {
    const errorResponse = {
      error: { message: 'Error al crear la reservación' },
    };
    mockReservationService.createreservations.and.returnValue(
      throwError(() => errorResponse)
    );

    component.onSubmit();

    expect(component.errorMessage).toBe('Error al crear la reservación');
  });

  it('should navigate to reservations on successful reservation creation', () => {
    mockReservationService.createreservations.and.returnValue(of({}));
    component.onSubmit();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/reservations']);
  });

  it('should disable the submit button if the form is invalid', () => {
    component.reservationForm.setValue({
      userId: '',
      spaceId: '',
      startDate: '',
      endDate: '',
    });
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(button.disabled).toBeTrue();
  });

  it('should enable the submit button if the form is valid', () => {
    component.reservationForm.setValue({
      userId: '1',
      spaceId: '2',
      startDate: '2025-01-01',
      endDate: '2025-01-02',
    });
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(button.disabled).toBeFalse();
  });
});
