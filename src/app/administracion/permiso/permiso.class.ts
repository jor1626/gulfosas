export class PermisoClass {
    constructor(
        public codalm?: string,
        public nomalm?: string,
        public telalm?: string,
        public coddane?: string,
        public ciualm?: string,
        public diralm?: string,
        public prefijo?: string,
        public estado?: number
    ) {
        this.codalm = null;
        this.nomalm = null;
        this.telalm = null;
        this.coddane = null;
        this.ciualm = null;
        this.diralm = null;
        this.prefijo = null;
        this.estado = 1;
    }
}

export const EstadosPermisoFitl: Array<any> = [
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
