import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SucursalClass } from './sucursal.class';
import { APP } from 'src/app/app.contants';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  apiUrl = APP.ApiEndpoint;

  constructor(private _http: HttpClient) { }

  public listarSucursal(data: any) {
    const url = `${this.apiUrl}/api/sucursal/`;
    const self = this;
    return this._http.post(url,data)
  }

  public guardarSucursal(data: SucursalClass) {
    const url = `${this.apiUrl}/api/sucursal/crear/`;
    const self = this;
    return this._http.post(url, data)
  }

  public editarSucursal(data: SucursalClass) {
    const url = `${this.apiUrl}/api/sucursal/editar/`;
    const self = this;
    return this._http.post(url, data)
  }

  public estadoSucursal(data: any) {
    const url = `${this.apiUrl}/api/sucursal/estado/`;
    const self = this;
    return this._http.post(url, data)
  }

  public consecutivo(data: any) {
    const url = `${this.apiUrl}/api/sucursal/consecutivo/`;
    const self = this;
    return this._http.post(url, data)
  }
}
