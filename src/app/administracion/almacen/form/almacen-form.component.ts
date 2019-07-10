import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';
import { AlmacenService } from '../almacen.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-almacen-form',
  templateUrl: './almacen-form.component.html',
  styleUrls: []
})
export class AlmacenFormComponent implements OnInit {
  listadoCiudades: any;
  c_accion: Number;
  formData: FormGroup;
  // listadoDepartamentos: Array<DepartamentoClass>;

    @Input() set accion(accion: Number) {
        this.c_accion = accion;
        switch (accion) {
            case 1:
                this.formData.reset();
                this.ngxSmartModalService.getModal('almacen_form_modal').open();
                break;
            case 2:
                this.ngxSmartModalService.getModal('almacen_form_modal').open();
                break;
        }
    }

    @Input() set idIn(id: number) {
        if (id) {
            this.cargar_almacen(id);
        }
    }

    @Output() close = new EventEmitter();

    constructor(
        public ngxSmartModalService: NgxSmartModalService,
        private snotifyService: SnotifyService,
        private almacenService: AlmacenService,
        private fb:  FormBuilder
    ) {
      this.listadoCiudades = [];
    }

    ngOnInit() {
      var required = Validators.required;
      var maxLength = Validators.maxLength;
      this.formData = this.fb.group({
        id: [''],
        codalm: ['', [required, maxLength(3)]],
        nomalm: ['', [required, maxLength(40)]],
        telalm: ['', [required, maxLength(10)]],
        prefijo: ['', [required, maxLength(2)]],
        diralm: ['', [required, maxLength(20)]],
        coddane: ['', [required, maxLength(4)]]
      })
    }

    async cargar_almacen(id: number) {
        let almacen = await this.almacenService.listarAlmacen({
          id: id
        }).subscribe((data: any) => data);

        this.formData.setValue(almacen)
    }

    changeCiudad(data: any){

    }

    cerrar() {
      this.ngxSmartModalService.getModal('almacen_form_modal').close();
      this.close.emit({ tipo: 1 });
    }

    submitAlmacenForm(form: FormGroup){
        if(this.c_accion == 1){
            this.guardar(form)
        }else{
            this.editar(form);
        }
    }
    
    async guardar(form: FormGroup) {
        try {
            let data = this.formData.value;
            const result: any = await this.almacenService.guardarAlmacen(data);
            if (!result) {
                throw new Error();
            }
            form.reset();
            this.snotifyService.success('Correctamente', 'Guardado');
            this.ngxSmartModalService.getModal('almacen_form_modal').close();
            this.close.emit({ tipo: 2 });
        } catch (err) {
            console.log(err);
            this.snotifyService.error('Se ha presentado un error inesperado.', '');
        }
    }

    async editar(form: FormGroup) {
        try {
            let data = this.formData.value;
            const result: any = await this.almacenService.editarAlmacen(data);
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
