import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/core/models/user,models';
import { ReservationsService } from 'src/app/features/reservations/services/reservations.service';
import { Space } from 'src/app/core/models/space.models';

@Component({
  selector: 'app-form-reservations',
  templateUrl: './form-reservations.component.html',
  styleUrls: ['./form-reservations.component.scss'],
})
export class FormReservationsComponent implements OnInit {
  reservationForm: FormGroup;
  isEditMode = false;
  reservationId: string | null = '';

  users: IUser[] = [];

  spaces: Space[] = [];

  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.reservationForm = this.fb.group({
      userId: ['', Validators.required],
      spaceId: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.reservationId = this.route.snapshot.paramMap.get('id');
    this.filterSpace();
    this.getSpaces();
    this.getUsers();
  }

  filterSpace() {
    if (this.reservationId) {
      this.isEditMode = true;
      let reservation = this.reservationService.reservationsListDT.find(
        (item) => item.id == this.reservationId
      );
      if (reservation) {
        this.reservationForm.patchValue(reservation);
        return;
      }
      {
        this.router.navigate(['/reservations']);
      }
    }
  }
  onSubmit(): void {
    const { startDate, endDate } = this.reservationForm.value;

    if (this.reservationForm.valid) {
      if (startDate < endDate) {
        const payload: {
          userId: number;
          spaceId: number;
          startDate: Date;
          endDate: Date;
        } = this.reservationForm.value;

        this.reservationService.createreservations(payload).subscribe({
          next: () => {
            this.router.navigate(['/reservations']);
          },
          error: (error) => {
            this.errorMessage = error.error.message;
          },
        });
      }else{
        this.errorMessage = "La fecha final debe ser mayor a la fecha inicial";
      }
    }
  }

  getUsers() {
    this.reservationService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  getSpaces() {
    this.reservationService.getSpaces().subscribe((spaces) => {
      this.spaces = spaces;
    });
  }

  onBack() {
    this.router.navigate(['/reservations']);
  }

  get userName() {
    return this.reservationForm?.get('userId');
  }
  get spaceName() {
    return this.reservationForm?.get('reservationId');
  }
  get startDate() {
    return this.reservationForm?.get('startDate');
  }

  get endDate() {
    return this.reservationForm?.get('endDate');
  }
}
