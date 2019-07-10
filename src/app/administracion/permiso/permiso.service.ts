import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PermisoClass } from './permiso.class';
import { APP } from 'src/app/app.contants';

@Injectable({
  providedIn: 'root'
})
export class PermisoService {
  apiUrl = APP.ApiEndpoint;

  constructor(private _http: HttpClient) { }

  public listarPermiso(data: any) {
    const url = `${this.apiUrl}/api/permiso/`;
    const self = this;
    return this._http.post(url,data)
  }

  public guardarPermiso(data: PermisoClass) {
    const url = `${this.apiUrl}/api/permiso/crear/`;
    const self = this;
    return this._http.post(url, data)
  }

  public editarPermiso(data: PermisoClass) {
    const url = `${this.apiUrl}/api/permiso/editar/`;
    const self = this;
    return this._http.post(url, data)
  }

  public estadoPermiso(data: any) {
    const url = `${this.apiUrl}/api/permiso/estado/`;
    const self = this;
    return this._http.post(url, data)
  }

  public consecutivo(data: any) {
    const url = `${this.apiUrl}/api/permiso/consecutivo/`;
    const self = this;
    return this._http.post(url, data)
  }
}
