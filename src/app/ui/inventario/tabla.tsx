'use client'
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export default function TablaInventario() {


    const inventario = [
        {
            "galleta": "Vainilla",
            "caducidad": "2024-12-31",
            "cantidad": 10,
            "estatus": "Disponible"
        },
        {
            "galleta": "Chocolate",
            "caducidad": "2024-11-30",
            "cantidad": 5,
            "estatus": "Agotado"
        },
        {
            "galleta": "Fresa",
            "caducidad": "2024-10-15",
            "cantidad": 8,
            "estatus": "Disponible"
        }, {
            "galleta": "Menta",
            "caducidad": "2024-09-20",
            "cantidad": 3,
            "estatus": "Próximo a caducar"
        }];

    return (

        <>
            <DataTable value={inventario} showGridlines tableStyle={{ minWidth: '50rem' }} paginator rows={10} >
                <Column field="galleta" header="Galleta"></Column>
                <Column field="caducidad" header="Caducidad"></Column>
                <Column field="cantidad" header="Cantidad"></Column>
                <Column field="estatus" header="Estatus"></Column>
                <Column field="acciones" body={() => (
                    <Button severity="warning" icon ='pi pi-pencil'/>
                )}></Column>
            </DataTable>
        </>


    )
}