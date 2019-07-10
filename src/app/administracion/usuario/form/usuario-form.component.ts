import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';
import { UsuarioService } from '../usuario.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: []
})
export class UsuarioFormComponent implements OnInit {
  listadoCiudades: any;
  c_accion: Number;
  formData: FormGroup;
  // listadoDepartamentos: Array<DepartamentoClass>;

    @Input() set accion(accion: Number) {
        this.c_accion = accion;
        switch (accion) {
            case 1:
                this.formData.reset();
                this.ngxSmartModalService.getModal('usuario_form_modal').open();
                break;
            case 2:
                this.ngxSmartModalService.getModal('usuario_form_modal').open();
                break;
        }
    }

    @Input() set idIn(id: number) {
        if (id) {
            this.cargar_usuario(id);
        }
    }

    @Output() close = new EventEmitter();

    constructor(
        public ngxSmartModalService: NgxSmartModalService,
        private snotifyService: SnotifyService,
        private usuarioService: UsuarioService,
        private fb:  FormBuilder
    ) {
      this.listadoCiudades = [];
    }

    ngOnInit() {
      var required = Validators.required;
      var maxLength = Validators.maxLength;
      this.formData = this.fb.group({
        id: [''],
        documento: ['', [required, maxLength(10)]],
        primer_nombre: ['', [required]],
        segundo_nombre: ['', [required]],
        primer_apellido: ['', [required]],
        segundo_apellido: ['', [required]],
        telefono: ['', [required]],
        email: ['', [required]],
        usuario: ['', [required]],
        password: ['', [required]],
        perfiles: ['', [required]],
        estado: ['', [required]]
      })
    }

    async cargar_usuario(id: number) {
        let usuario = await this.usuarioService.listarUsuario({
          id: id
        }).subscribe((data: any) => data);

        this.formData.setValue(usuario)
    }

    changeCiudad(data: any){

    }

    cerrar() {
      this.ngxSmartModalService.getModal('usuario_form_modal').close();
      this.close.emit({ tipo: 1 });
    }

    submitUsuarioForm(form: FormGroup){
        if(this.c_accion == 1){
            this.guardar(form)
        }else{
            this.editar(form);
        }
    }
    
    async guardar(form: FormGroup) {
        try {
            let data = this.formData.value;
            const result: any = await this.usuarioService.guardarUsuario(data);
            if (!result) {
                throw new Error();
            }
            form.reset();
            this.snotifyService.success('Correctamente', 'Guardado');
            this.ngxSmartModalService.getModal('usuario_form_modal').close();
            this.close.emit({ tipo: 2 });
        } catch (err) {
            console.log(err);
            this.snotifyService.error('Se ha presentado un error inesperado.', '');
        }
    }

    async editar(form: FormGroup) {
        try {
            let data = this.formData.value;
            const result: any = await this.usuarioService.editarUsuario(data);
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
