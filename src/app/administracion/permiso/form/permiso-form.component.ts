import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';
import { PermisoService } from '../permiso.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-permiso-form',
  templateUrl: './permiso-form.component.html',
  styleUrls: []
})
export class PermisoFormComponent implements OnInit {
  listadoCiudades: any;
  c_accion: Number;
  formData: FormGroup;
  // listadoDepartamentos: Array<DepartamentoClass>;

    @Input() set accion(accion: Number) {
        this.c_accion = accion;
        switch (accion) {
            case 1:
                this.formData.reset();
                this.ngxSmartModalService.getModal('permiso_form_modal').open();
                break;
            case 2:
                this.ngxSmartModalService.getModal('permiso_form_modal').open();
                break;
        }
    }

    @Input() set idIn(id: number) {
        if (id) {
            this.cargar_permiso(id);
        }
    }

    @Output() close = new EventEmitter();

    constructor(
        public ngxSmartModalService: NgxSmartModalService,
        private snotifyService: SnotifyService,
        private permisoService: PermisoService,
        private fb:  FormBuilder
    ) {
      this.listadoCiudades = [];
    }

    ngOnInit() {
      var required = Validators.required;
      var maxLength = Validators.maxLength;
      this.formData = this.fb.group({
        id: [''],
        codigo: ['', [required, maxLength(20)]],
        nombre: ['', [required, maxLength(40)]],
        tipo: ['', [required, maxLength(1)]],
        descripcion: ['', [required, maxLength(100)]],
      })
    }

    async cargar_permiso(id: number) {
        let permiso = await this.permisoService.listarPermiso({
          id: id
        }).subscribe((data: any) => data);

        this.formData.setValue(permiso)
    }

    changeTipo(data: any){
        const tipo = data.target.value;
        if(tipo != null && tipo != ""){
            this.formData.controls['tipo'].patchValue = data.target.value;
        }
    }

    cerrar() {
      this.ngxSmartModalService.getModal('permiso_form_modal').close();
      this.close.emit({ tipo: 1 });
    }
    
    async guardar() {
        try {
            let data = this.formData.value;
            const result: any = await this.permisoService.guardarPermiso(data);
            if (!result) {
                throw new Error();
            }
            this.snotifyService.success('Correctamente', 'Guardado');
            this.ngxSmartModalService.getModal('permiso_form_modal').close();
            this.close.emit({ tipo: 2 });
        } catch (err) {
            console.log(err);
            this.snotifyService.error('Se ha presentado un error inesperado.', '');
        }
    }

    async editar() {
        try {
            let data = this.formData.value;
            const result: any = await this.permisoService.editarPermiso(data);
            if (!result) {
                throw new Error();
            }
            this.snotifyService.success('Correctamente', 'Actualizado');
            this.ngxSmartModalService.getModal('ciudades_form_modal').close();
            this.close.emit({ tipo: 3 });
        } catch (err) {
            console.log(err);
            this.snotifyService.error('Se ha presentado un error inesperado.', '');
        }
    }

}
