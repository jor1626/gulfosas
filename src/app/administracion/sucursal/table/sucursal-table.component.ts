import { Component, OnInit, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';


// import { DataTableDirective } from 'angular-datatables';
import { SucursalClass } from '../sucursal.class';
import { SucursalService } from '../sucursal.service';
import { DataSpanidhDatatable } from 'src/app/app.contants';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { SnotifyService } from 'ng-snotify';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sucursal-table',
  templateUrl: './sucursal-table.component.html',
  styleUrls:['./sucursal-table.css']
})
export class SucursalTableComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  sucursales: SucursalClass;
  estadoFilt: Number;

  @Input() set cambio(cambio: Number) {
    if (cambio > 1) {
      this.listar_sucursales();
    }
  }

  @Input() set filtro(estado: Number) {
    if (estado != undefined) {
      this.estadoFilt = estado;
      this.listar_sucursales();
    }
  }
  @Output() close = new EventEmitter();
  
  constructor(
    private snotifyService: SnotifyService,
    private sucursalService:  SucursalService
  ) {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: DataSpanidhDatatable
    };
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }


  ngOnInit() {
  }

  async listar_sucursales() {
    await this.sucursalService.listarSucursal({
      estado: this.estadoFilt
    }).subscribe((data: any) => this.sucursales = data);
    this.rerender();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  editar(id: String) {
    this.close.emit({ tipo: 2, id: id });
  }

  async desactivar(id: number) {
    try {
      const result = await this.sucursalService.estadoSucursal({
        id: id,
        estado: 0
      });
      if (!result) {
        throw new Error();
      }
      this.snotifyService.success('Correctamente', 'Desactivado');
      this.close.emit({ tipo: 3 });
      this.listar_sucursales();
    } catch (err) {
      console.log(err);
      this.snotifyService.error('Se ha presentado un error inesperado.', 'Atención');
    }
  }
  
  async reactivar(id: number) {
    try {
      const result = await this.sucursalService.estadoSucursal({
        id: id,
        estado: 1
      });
      if (!result) {
        throw new Error();
      }
      this.snotifyService.success('Correctamente', 'Reactivado');
      this.close.emit({ tipo: 4 });
      this.listar_sucursales();
    } catch (err) {
      console.log(err);
      this.snotifyService.error('Se ha presentado un error inesperado.', 'Atención');
    }
  }

}
