import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IReservation } from '../models/reservations.interface';
import { environment } from 'src/environments/environment.prod';
import { ApiGenericResponse } from 'src/app/core/models/apiGenericResponse.model';
import { Space } from 'src/app/core/models/space.models';
import { IUser } from 'src/app/core/models/user,models';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  private pathUrl = 'Reservations';

  public reservationsListDT: IReservation[] = [];
  constructor(private http: HttpClient) { }

  getReservations(): Observable<IReservation[]> {
    return this.http
      .get<ApiGenericResponse<IReservation[]>>(
        environment.apiUrl + this.pathUrl
      )
      .pipe(map((response) => response.data));
  }

  createreservations(reservations: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + this.pathUrl, reservations);
  }

  getSpaces(): Observable<Space[]> {
    return this.http
      .get<ApiGenericResponse<Space[]>>(environment.apiUrl + 'Utils/Spaces')
      .pipe(map((response) => response.data));
  }

  getUsers(): Observable<IUser[]> {
    return this.http
      .get<ApiGenericResponse<IUser[]>>(environment.apiUrl + 'Utils/Users')
      .pipe(map((response) => response.data));
  }

  deleteReservations(idReservations: string): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + 'Reservations/' + idReservations);
  }
}
