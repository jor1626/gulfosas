import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { HomeRecepcionComponent } from './home-recepcion/home-recepcion.component';
import { AgendaComponent } from './agenda/agenda.component';
import { RecepcionComponent } from './recepcion.component';

export const routes: Routes = [
  {
    path: '',
    component: RecepcionComponent,
    children: [
      {
        path: '',
        component: HomeRecepcionComponent
      },
      {
        path: 'agenda',
        component: AgendaComponent
      }
    ]
  }
];

export const routingRecepcion = RouterModule.forChild(routes);
// if it has child use routing below
//export const routing = RouterModule.forChild(routes);

