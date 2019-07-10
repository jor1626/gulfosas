import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdministracionComponent } from './administracion.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { PermisoComponent } from './permiso/permiso.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const routes: Routes = [
  {
    path: '',
    component: AdministracionComponent,
    children: [
      //Negoció
        { path: '', component: HomeAdminComponent },
        { path: 'empresa', component: EmpresaComponent },
        { path: 'sucursales', component: SucursalComponent },
        { path: 'bodegas', component: AlmacenComponent },
      //Seguridad
        { path: 'permisos', component: PermisoComponent },
        { path: 'usuarios', component: UsuarioComponent },

    ]
  }
];

export const routingAdmin = RouterModule.forChild(routes);
// if it has child use routing below
//export const routing = RouterModule.forChild(routes);

