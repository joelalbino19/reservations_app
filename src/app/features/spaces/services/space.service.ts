import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Space } from '../models/space.models';
import { environment } from 'src/environments/environment.prod';
import { ApiGenericResponse } from 'src/app/core/models/apiGenericResponse.model';



@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  private pathUrl = 'Spaces';

  public spaceListDT: Space[] = [];
  constructor(private http: HttpClient) { }

  // Método para obtener todos los espacios
  getSpaces(): Observable<Space[]> {
    return this.http.get<ApiGenericResponse<Space[]>>(environment.apiUrl + this.pathUrl)
      .pipe(map((response) => response.data));

  }
  createSpace(space: any): Observable<Space[]> {
    return this.http.post<ApiGenericResponse<Space[]>>(environment.apiUrl + this.pathUrl, space)
      .pipe(map((response) => response.data));
  }
  deleteSpace(idSpace: string): Observable<Space[]> {
    return this.http.delete<ApiGenericResponse<Space[]>>(environment.apiUrl + 'Spaces?id=' + idSpace)
      .pipe(map((response) => response.data));
  }
}
