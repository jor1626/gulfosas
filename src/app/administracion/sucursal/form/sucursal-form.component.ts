import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';
import { SucursalService } from '../sucursal.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-sucursal-form',
  templateUrl: './sucursal-form.component.html',
  styleUrls: []
})
export class SucursalFormComponent implements OnInit {
    listadoRegimenes: any;
    listadoCiudades: any;
    c_accion: Number;
    formData: FormGroup;
    // listadoDepartamentos: Array<DepartamentoClass>;

    @Input() set accion(accion: Number) {
        this.c_accion = accion;
        switch (accion) {
            case 1:
                this.formData.reset();
                this.ngxSmartModalService.getModal('sucursal_form_modal').open();
                break;
            case 2:
                this.ngxSmartModalService.getModal('sucursal_form_modal').open();
                break;
        }
    }

    @Input() set idIn(id: number) {
        if (id) {
            this.cargar_sucursal(id);
        }
    }

    @Output() close = new EventEmitter();

    ngOnInit() {
        var required = Validators.required;
        var maxLength = Validators.maxLength;
        this.formData = this.fb.group({
          id:  ['', Validators.nullValidator],
          codcen:  ['', [required, , maxLength(3)]],
          nomcen:  ['', [required, maxLength(40)]],
          dircen:  ['', [required, maxLength(20)]],
          nivcen:  ['', [required, maxLength(1)]],
          concen:  ['', [required, maxLength(5)]],
          estado:  ['1', [required, maxLength(1)]]
        })
      }

    constructor(
        public ngxSmartModalService: NgxSmartModalService,
        private snotifyService: SnotifyService,
        private sucursalService: SucursalService,
        private fb:  FormBuilder
    ) {
      this.listadoCiudades = [];
      this.listadoRegimenes = [
        { codreg: '1', nomreg: 'Gran Contribuyente'},
        { codreg: '2', nomreg: 'Persona Natural'},
        { codreg: '3', nomreg: 'Régimen Común'},
        { codreg: '4', nomreg: 'Régimen Simplificado'}
      ]
    }

    async cargar_sucursal(id: number) {
        let sucursal = await this.sucursalService.listarSucursal({
          id: id
        }).subscribe((data: any) => data);

        this.formData.patchValue(sucursal)
    }

    changeRegimen(data: any){
        this.formData.controls['concen'].patchValue = data.codreg
    }

    changeClase(data: any){
        this.formData.controls['nivcen'].patchValue =  data.target.value
    }

    cerrar() {
      this.ngxSmartModalService.getModal('sucursal_form_modal').close();
      this.close.emit({ tipo: 1 });
    }

    submitSucursalForm(form: FormGroup){
        if(this.c_accion == 1){
            this.guardar(form)
        }else{
            this.editar(form);
        }
    }
    
    async guardar(form: FormGroup) {
        try {
            let data = this.formData.value;
            const result: any = await this.sucursalService.guardarSucursal(data);
            if (!result) {
                throw new Error();
            }
            form.reset();
            this.snotifyService.success('Correctamente', 'Guardado');
            this.ngxSmartModalService.getModal('sucursal_form_modal').close();
            this.close.emit({ tipo: 2 });
        } catch (err) {
            console.log(err);
            this.snotifyService.error('Se ha presentado un error inesperado.', '');
        }
    }

    async editar(form: FormGroup) {
        try {
            let data = this.formData.value;
            const result: any = await this.sucursalService.editarSucursal(data);
            if (!result) {
                throw new Error();
            }
            form.reset();
            this.snotifyService.success('Correctamente', 'Actualizado');
            this.ngxSmartModalService.getModal('ciudades_form_modal').close();
            this.close.emit({ tipo: 3 });
        } catch (err) {
            console.log(err);
            this.snotifyService.error('Se ha presentado un error inesperado.', '');
        }
    }

}
