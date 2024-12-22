'use client'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Venta } from '@/app/models/ventas.model';
import './ventas.css'

interface TablaVentasProps {
    precio: string;
    fecha_inicio: Date | '';
    fecha_fin: Date | '';
}

export default function TablaVentas({precio, fecha_inicio, fecha_fin}: TablaVentasProps) {

    let ventas: Venta[] = [{ fecha_venta: '2021-10-01', total: 1000 }, { fecha_venta: '2021-10-02', total: 2000 }, { fecha_venta: '2021-10-03', total: 3000 }];
    
    
    if(precio != ''){
        ventas = ventas.filter((venta) => venta.total.toString().includes(precio));
    }

    if(fecha_inicio != '' && fecha_fin != ''){

        ventas = ventas.filter((venta) => venta.)
        
    }
    





    return (

        <>

           


            <DataTable value={ventas} showGridlines tableStyle={{ minWidth: '50rem' }} paginator rows={10}>
                <Column field="fecha_venta" header="Fecha de venta"></Column>
                <Column field="total" header="total"></Column>
            </DataTable>
        </>

    )
}