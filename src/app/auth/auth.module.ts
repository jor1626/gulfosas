import { NgModule }     from '@angular/core';

import { routing }      from './auth.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SharedModule } from '../shared.module';

// This Module's Components

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        ForgotComponent
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
        ForgotComponent
    ]
})
export class AuthModule {

}
