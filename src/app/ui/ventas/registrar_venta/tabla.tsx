'use client'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface TablaVentaGalletasProps{

    productos: object[];
}

export default function TablaVentaGalletas({productos}: TablaVentaGalletasProps) {

    return (

        <>
            <DataTable value={productos} showGridlines tableStyle={{ minWidth: '50rem' }} paginator rows={10} >
                <Column field="nombre" header="Galleta"></Column>
                <Column field="cantidad" header="Cantidad"></Column>
                <Column field="tipo_unidad" header="Tipo de unidad"></Column>
                <Column field="precio_unitario" header="Precio unitario"></Column>
                <Column field="subtotal" header="Subtotal"></Column>
                <Column field="acciones" header="Acciones"></Column>
            </DataTable>
        </>

    )
}