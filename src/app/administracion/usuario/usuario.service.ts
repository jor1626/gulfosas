import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioClass } from './usuario.class';
import { APP } from 'src/app/app.contants';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  apiUrl = APP.ApiEndpoint;

  constructor(private _http: HttpClient) { }

  public listarUsuario(data: any) {
    const url = `${this.apiUrl}/api/usuario/`;
    const self = this;
    return this._http.post(url,data)
  }

  public guardarUsuario(data: UsuarioClass) {
    const url = `${this.apiUrl}/api/usuario/crear/`;
    const self = this;
    return this._http.post(url, data)
  }

  public editarUsuario(data: UsuarioClass) {
    const url = `${this.apiUrl}/api/usuario/editar/`;
    const self = this;
    return this._http.post(url, data)
  }

  public estadoUsuario(data: any) {
    const url = `${this.apiUrl}/api/usuario/estado/`;
    const self = this;
    return this._http.post(url, data)
  }

  public consecutivo(data: any) {
    const url = `${this.apiUrl}/api/usuario/consecutivo/`;
    const self = this;
    return this._http.post(url, data)
  }
}
