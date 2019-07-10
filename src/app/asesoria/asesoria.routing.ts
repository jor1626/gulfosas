import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { HomeAsesoriaComponent } from './home-asesoria/home-asesoria.component';
import { AsesoriaComponent } from './asesoria.component';

export const routes: Routes = [
  {
    path: 'asesoria',
    component: AsesoriaComponent,
    children: [
      { path: '', component: HomeAsesoriaComponent }
    ]
  }
];

export const routingAsesoria = RouterModule.forChild(routes);
// if it has child use routing below
//export const routing = RouterModule.forChild(routes);

