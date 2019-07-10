import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { TooltipModule } from 'ngx-tooltip';
import { NgSelectModule } from '@ng-select/ng-select';
import { SnotifyService, ToastDefaults, SnotifyModule } from 'ng-snotify';
import { AsideComponent } from './components/aside/aside.component';
import { AsideRightComponent } from './components/aside-right/aside-right.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';



@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DataTablesModule,
    NgSelectModule,
    SnotifyModule,
  ],
  declarations: [
    AsideComponent,
    AsideRightComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  exports:[
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxSmartModalModule,
    DataTablesModule,
    NgSelectModule,
    TooltipModule,
    SnotifyModule,
    AsideComponent,
    AsideRightComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  providers:[
    SnotifyService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
