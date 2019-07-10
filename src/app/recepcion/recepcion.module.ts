import { NgModule }     from '@angular/core';
import { routingRecepcion }      from './recepcion.routing';
import { SharedModule } from '../shared.module';

// This Module's Components
import { RecepcionComponent } from './recepcion.component';
import { HomeRecepcionComponent } from './home-recepcion/home-recepcion.component';
import { AgendaComponent } from './agenda/agenda.component';


@NgModule({
    imports: [
        SharedModule,
        routingRecepcion
    ],
    declarations: [
        RecepcionComponent,
        HomeRecepcionComponent,
        AgendaComponent
    ],
    exports: [
        HomeRecepcionComponent
    ]
})
export class RecepcionModule {

}
