import { NgModule }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared.module';
import { routingAdmin }      from './administracion.routing';


// This Module's Components
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdministracionComponent } from './administracion.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { AlmacenTableComponent } from './almacen/table/almacen-table.component';
import { AlmacenFormComponent } from './almacen/form/almacen-form.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { SucursalTableComponent } from './sucursal/table/sucursal-table.component';
import { SucursalFormComponent } from './sucursal/form/sucursal-form.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { EmpresaFormComponent } from './empresa/form/empresa-form.component';
import { PermisoComponent } from './permiso/permiso.component';
import { PermisoTableComponent } from './permiso/table/permiso-table.component';
import { PermisoFormComponent } from './permiso/form/permiso-form.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioTableComponent } from './usuario/table/usuario-table.component';
import { UsuarioFormComponent } from './usuario/form/usuario-form.component';

@NgModule({
    imports: [
        SharedModule,
        routingAdmin
    ],
    declarations: [
        AdministracionComponent,
        HomeAdminComponent,
        EmpresaComponent, EmpresaFormComponent,
        SucursalComponent, SucursalTableComponent, SucursalFormComponent,
        AlmacenComponent, AlmacenTableComponent, AlmacenFormComponent,
        PermisoComponent, PermisoTableComponent, PermisoFormComponent,
        UsuarioComponent, UsuarioTableComponent, UsuarioFormComponent
    ],
    exports: [
    ]
})
export class AdministracionModule {

}
