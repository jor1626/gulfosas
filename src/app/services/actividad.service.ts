import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observer } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  apiUrl = environment.ApiEndpoint;

  constructor(private http: HttpClient) { }

  listar(data: any){
    const url = `${this.apiUrl}/api/actividades/`;
    return this.http.post<any>(url, data);
  }

}
