import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';
import { EmpresaService } from '../empresa.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ActividadService } from 'src/app/services/actividad.service';
import { CiudadService } from 'src/app/services/ciudad.service';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: []
})
export class EmpresaFormComponent implements OnInit {
  listadoCiudades: any;
  listadoActividades: any;
  listadoRegimenes: any;
  c_accion: Number;
  formData: FormGroup;

    constructor(
        public ngxSmartModalService: NgxSmartModalService,
        private snotifyService: SnotifyService,
        private empresaService: EmpresaService,
        private ciudadService: CiudadService,
        private actividadService: ActividadService,
        private fb:  FormBuilder
    ) {
      this.listadoCiudades = [];
      this.listadoActividades = [];
      this.listadoRegimenes = [
        { codreg: '1', nomreg: 'Gran Contribuyente'},
        { codreg: '2', nomreg: 'Persona Natural'},
        { codreg: '3', nomreg: 'Régimen Común'},
        { codreg: '4', nomreg: 'Régimen Simplificado'}
      ]
    }

    ngOnInit() {
      var required = Validators.required;
      var maxLength = Validators.maxLength;
      this.formData = this.fb.group({
        id: [''],
        codemp: ['', [required, maxLength(2)]],
        nitemp: ['', [required, maxLength(15)]],
        razemp: ['', [required, maxLength(50)]],
        telemp: ['', [required, maxLength(10)]],
        diremp: ['', [required, maxLength(25)]],
        coddane: ['', [required, maxLength(4)]],
        geremp: ['', [required, maxLength(35)]], 
        conemp: ['', [required, maxLength(35)]],
        revemp: ['', [required, maxLength(35)]],
        actemp: ['', [required, maxLength(5)]],
        tarifa_cree: ['', [required, maxLength(3)]],
        tarifa_empresa: ['', [required, maxLength(3)]],
        tipoemp: ['', [required, maxLength(1)]],
        accion: ['', [required, maxLength(3)]],
        logo_empresa: ['', required, Validators.toString]
      })
      this.listar_actividades();
    }

    async listar_actividades(){
        this.listadoActividades = await this.actividadService.listar({}).subscribe((data: any) => data);
        this.listar_ciudades();
    }

    async listar_ciudades(){
        this.listadoCiudades = await this.ciudadService.listar({}).subscribe((data: any) => data);
        this.cargar_empresa();
    }

    async cargar_empresa() {

        await this.empresaService.listarEmpresa({}).subscribe((data: any) => {
            const empresa = data;
            if(empresa.lenght > 0){
                this.c_accion = 2;
            }else{
                this.c_accion = 1; 
            }
            this.formData.patchValue(empresa)
        });
        
    }

    changeRegimen(data: any){
        this.formData.controls['tipoemp'].patchValue = data.codreg
    }

    openLoadFile(){
        $('#logo_empresa').trigger('click');
    }

    submitEmpresaForm(form: FormGroup){
        if(this.c_accion == 1){
            this.guardar(form)
        }else{
            this.editar(form);
        }
    }
    
    async guardar(form: FormGroup) {
        try {
            let data = this.formData.value;
            const result: any = await this.empresaService.guardarEmpresa(data);
            if (!result) {
                throw new Error();
            }
            form.reset();
            this.snotifyService.success('Correctamente', 'Guardado');
            this.ngxSmartModalService.getModal('empresa_form_modal').close();
            this.cargar_empresa();
        } catch (err) {
            console.log(err);
            this.snotifyService.error('Se ha presentado un error inesperado.', '');
        }
    }

    async editar(form: FormGroup) {
        try {
            let data = this.formData.value;
            const result: any = await this.empresaService.editarEmpresa(data);
            if (!result) {
                throw new Error();
            }
            form.reset();
            this.snotifyService.success('Correctamente', 'Actualizado');
            this.ngxSmartModalService.getModal('ciudades_form_modal').close();
            this.cargar_empresa();
        } catch (err) {
            console.log(err);
            this.snotifyService.error('Se ha presentado un error inesperado.', '');
        }
    }

}
