import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import localeEsCo from '@angular/common/locales/es-CO';
registerLocaleData(localeEsCo,'es-CO');

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared.module';
import { AdministracionModule } from './administracion/administracion.module';
import { AsesoriaModule } from './asesoria/asesoria.module';
import { RecepcionModule } from './recepcion/recepcion.module';

import { AppComponent } from './app.component';
import { NofoundComponent } from './components/nofound/nofound.component';

@NgModule({
  declarations: [
    AppComponent,
    NofoundComponent
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    AdministracionModule,
    AsesoriaModule,
    RecepcionModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-Co' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
