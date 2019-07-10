export class UsuarioClass {
    constructor(
        public id: number,
        public documento: number,
        public primer_nombre: string,
        public segundo_nombre: string,
        public primer_apellido: string,
        public segundo_apellido: string,
        public telefono: number,
        public email: any,
        public usuario: any,
        public password: any,
        public perfiles: Array<any>,
        public estado: number
    ) {
        this.id = null;
        this.documento = null;
        this.primer_nombre = null;
        this.segundo_nombre = null;
        this.primer_apellido = null;
        this.segundo_apellido = null;
        this.telefono = null;
        this.email = null;
        this.usuario = null;
        this.password = null;
        this.perfiles = null;
        this.estado = 1;
    }
}

export const EstadosUsuarioFitl: Array<any> = [
    {
        codigo: 'todos',
        nombre: 'Todos'
    }, {
        codigo: 1,
        nombre: 'Activos'
    }, {
        codigo: 0,
        nombre: 'Inactivos'
    }
];
