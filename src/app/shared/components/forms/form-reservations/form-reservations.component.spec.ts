import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormReservationsComponent } from './form-reservations.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ReservationsService } from 'src/app/features/reservations/services/reservations.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('FormReservationsComponent', () => {
  let component: FormReservationsComponent;
  let fixture: ComponentFixture<FormReservationsComponent>;
  let reservationService: ReservationsService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormReservationsComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        FormBuilder,
        {
          provide: ReservationsService,
          useValue: {
            createreservations: jasmine.createSpy().and.returnValue(of({})),
            getUsers: jasmine.createSpy().and.returnValue(of([])),
            getSpaces: jasmine.createSpy().and.returnValue(of([])),
            reservationsListDT: []
          }
        },
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy() }
        },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: jasmine.createSpy().and.returnValue(null) } } }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormReservationsComponent);
    component = fixture.componentInstance;
    reservationService = TestBed.inject(ReservationsService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should show error when end date is before start date', () => {
    // Setup form values
    component.reservationForm.patchValue({
      userId: '1',
      spaceId: '1',
      startDate: '2025-01-10',
      endDate: '2025-01-09'
    });

    // Submit the form
    component.onSubmit();

    // Expect the error message to be set
    expect(component.errorMessage).toBe('La fecha final debe ser mayor a la fecha inicial');
  });

  it('should submit the form successfully when all fields are valid', () => {
    // Setup form values
    component.reservationForm.patchValue({
      userId: 2,
      spaceId: 12,
      startDate: '2025-01-09',
      endDate: '2025-01-10'
    });

    // Spy on the createreservations method
    const createReservationSpy = reservationService.createreservations;

    // Submit the form
    component.onSubmit();

    // Expect the service to be called
    expect(createReservationSpy).toHaveBeenCalledWith({
      userId: 2,
      spaceId: 12,
      startDate: '2025-01-09',
      endDate: '2025-01-10'
    });

    // Expect the router to navigate to the reservations list
    expect(router.navigate).toHaveBeenCalledWith(['/reservations']);
  });
});
