'use client'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';



export default function TablaVentaGalletas({deleteProduct, products}: any) {


    const products_clon = [...products];
    function popProduct(index: number): void {
        products_clon.splice(index, 1);
    }

    function deleteProductLocal(index: number): void {
        popProduct(index);
        deleteProduct(products_clon)
    }


    return (

        <>
            <DataTable value={products_clon} showGridlines tableStyle={{ minWidth: '50rem' }} paginator rows={7} >
                <Column field="nombre" header="Galleta"></Column>
                <Column field="cantidad" header="Cantidad"></Column>
                <Column field="tipo_unidad" header="Tipo de unidad"></Column>
                <Column field="precio_unitario" header="Precio unitario"></Column>
                <Column field="subtotal" header="Subtotal"></Column>
                <Column header="Acciones" body={(rowData, { rowIndex }) => (
                    <Button
                        icon="pi pi-trash"
                        severity="danger"
                        onClick={() => {
                            deleteProductLocal(rowIndex);
                        }}
                    />
                )}></Column>
            </DataTable>
        </>

    )
}