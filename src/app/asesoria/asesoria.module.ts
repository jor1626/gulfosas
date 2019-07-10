import { NgModule }     from '@angular/core';
import { routingAsesoria }      from './asesoria.routing';
import { SharedModule } from '../shared.module';

// This Module's Components
import { AsesoriaComponent } from './asesoria.component';
import { HomeAsesoriaComponent } from './home-asesoria/home-asesoria.component';



@NgModule({
    imports: [
        SharedModule,
        routingAsesoria
    ],
    declarations: [
        AsesoriaComponent,
        HomeAsesoriaComponent
    ],
    exports: [
    ]
})
export class AsesoriaModule {

}
