export class EmpresaClass {
    constructor(
        public codalm?: string,
        public nomalm?: string,
        public telalm?: string,
        public coddane?: string,
        public ciualm?: string,
        public diralm?: string,
        public prefijo?: string,
        public estado?: number,
        public estado_name?: string
    ) {
        this.codalm = null;
        this.nomalm = null;
        this.telalm = null;
        this.coddane = null;
        this.ciualm = null;
        this.diralm = null;
        this.prefijo = null;
        this.estado = 1;
        this.estado_name = null;
    }
}