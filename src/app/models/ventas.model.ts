
export class Venta {
    
    fecha_venta: string;
    total: number;

    constructor(fecha_venta: string, total: number){
        this.fecha_venta = fecha_venta;
        this.total = total;
    }
}