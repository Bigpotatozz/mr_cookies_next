'use client'
import FormularioRegistroVenta from "@/app/ui/ventas/registrar_venta/formulario_venta";
import TablaVentaGalletas from "@/app/ui/ventas/registrar_venta/tabla";
import { Button } from "primereact/button";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { useState } from "react";
import '../../../ui/ventas/ventas.css'
import Link from "next/link";
export default function RegistrarVenta() {

    const [productos, setProductos] = useState<object[]>([]);
    const [imprimirTicket, setImprimirTicket] = useState<boolean | undefined | null>(null);


    function addProduct(producto: object) {

        setProductos((prevProductos) => [...prevProductos, producto]);
    }

    function deleteProduct(productos_nuevos: object[]) {
        setProductos(productos_nuevos);
    }

    console.log(productos);




    return (
        <div className="registro_venta_container">

            <h2>Registrar venta</h2>

            <FormularioRegistroVenta addProduct={addProduct}></FormularioRegistroVenta>

            <TablaVentaGalletas deleteProduct={deleteProduct} products={productos}></TablaVentaGalletas>

            <div className="bottom_form">
                <div className="imprimir_ticket">
                    <TriStateCheckbox variant="filled" value={imprimirTicket} onChange={(e) => setImprimirTicket(e.value)} />
                    <p>Imprimir ticket</p>
                </div>


                <Link href={'../ventas'}><Button label="Cancelar" severity="danger" className="button_bottom_form"/></Link>
                <Button label="Finalizar compra" severity="success" className="button_bottom_form"/>
            </div>

        </div>
    )
}