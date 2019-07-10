import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlmacenClass } from './almacen.class';
import { APP } from 'src/app/app.contants';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  apiUrl = APP.ApiEndpoint;

  constructor(private _http: HttpClient) { }

  public listarAlmacen(data: any) {
    const url = `${this.apiUrl}/api/almacen/`;
    const self = this;
    return this._http.post(url,data)
  }

  public guardarAlmacen(data: AlmacenClass) {
    const url = `${this.apiUrl}/api/almacen/crear/`;
    const self = this;
    return this._http.post(url, data)
  }

  public editarAlmacen(data: AlmacenClass) {
    const url = `${this.apiUrl}/api/almacen/editar/`;
    const self = this;
    return this._http.post(url, data)
  }

  public estadoAlmacen(data: any) {
    const url = `${this.apiUrl}/api/almacen/estado/`;
    const self = this;
    return this._http.post(url, data)
  }

  public consecutivo(data: any) {
    const url = `${this.apiUrl}/api/almacen/consecutivo/`;
    const self = this;
    return this._http.post(url, data)
  }
}
