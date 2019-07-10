import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpresaClass } from './empresa.class';
import { APP } from 'src/app/app.contants';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  apiUrl = APP.ApiEndpoint;

  constructor(private _http: HttpClient) { }

  public listarEmpresa(data: any) {
    const url = `${this.apiUrl}/api/empresa/`;
    const self = this;
    return this._http.post(url,data)
  }

  public guardarEmpresa(data: EmpresaClass) {
    const url = `${this.apiUrl}/api/empresa/crear/`;
    const self = this;
    return this._http.post(url, data)
  }

  public editarEmpresa(data: EmpresaClass) {
    const url = `${this.apiUrl}/api/empresa/editar/`;
    const self = this;
    return this._http.post(url, data)
  }

  public estadoEmpresa(data: any) {
    const url = `${this.apiUrl}/api/empresa/estado/`;
    const self = this;
    return this._http.post(url, data)
  }

  public consecutivo(data: any) {
    const url = `${this.apiUrl}/api/empresa/consecutivo/`;
    const self = this;
    return this._http.post(url, data)
  }
}
