import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NofoundComponent } from './components/nofound/nofound.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'admin', loadChildren: './administracion/administracion.module#AdministracionModule' },
  { path: 'recepcion', loadChildren: './recepcion/recepcion.module#RecepcionModule' },
  { path: 'asesoria', loadChildren: './asesoria/asesoria.module#AsesoriaModule' },
  { path: '404', component:  NofoundComponent},
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
