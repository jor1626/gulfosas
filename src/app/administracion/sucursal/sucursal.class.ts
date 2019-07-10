export class SucursalClass {
    constructor(
        public codcen?: string,
        public nomcen?: string,
        public dircen?: string,
        public nivcen?: number,
        public concen?: number,
        public activo?: any
    ) {
        this.codcen = null;
        this.nomcen = null;
        this.dircen = null;
        this.nivcen = null;
        this.concen = null;
        this.activo = null;
    }
}

export const EstadosSucursalFitl: Array<any> = [
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
