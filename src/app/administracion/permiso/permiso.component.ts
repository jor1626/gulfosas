import { Component, OnInit } from '@angular/core';
import { EstadosPermisoFitl } from './permiso.class';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html'
})

export class PermisoComponent implements OnInit {
  c_id_table: number;
  c_accion_form: Number;
  c_cambio_table: number;
  c_filter_table = EstadosPermisoFitl;
  c_filter: any;

  constructor(private titleService: Title) {
      this.titleService.setTitle('Permisoes');
      this.c_accion_form = 0;
      this.c_filter = 1;
      this.c_cambio_table = 1;
  }

  ngOnInit() {
  }

  nuevo(){
    this.event_table_permisos({tipo: 1})
  }

  // ?----------------------------Permisoes---------------------------
  event_table_permisos(event: any): void {
      switch (event.tipo) {
          case 1: // * Nuevo
              this.c_accion_form = event.tipo;
              break;
          case 2: // * Editar
              this.c_accion_form = event.tipo;
              this.c_id_table = event.id;
              break;
          case 3: // * Desactivado
              this.c_cambio_table++;
              break;
          case 4: // * Reactivado
              this.c_cambio_table++;
              break;
      }
  }
  event_form_permisos(event): void {
      switch (event.tipo) {
          case 1: // * Cerró

              break;
          case 2: // * Guardó
              this.c_cambio_table++;
              break;
          case 3: // * Editó
              this.c_cambio_table++;
              break;
      }
      this.c_accion_form = 0;
      this.c_id_table = null;
  }


  changeState(state: any){
      if(state == 'todos' || state == null){
        this.c_filter = state;
      }else{
          this.c_filter = Number(state);
      }
  }
  
}
