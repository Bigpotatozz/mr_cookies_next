'use client'
import FormularioRegistroVenta from "@/app/ui/ventas/registrar_venta/formulario_venta";
import TablaVentaGalletas from "@/app/ui/ventas/registrar_venta/tabla";
import { useState } from "react";

export default function RegistrarVenta(){

    const [productos, setProductos] = useState<object[]>([]);


    function addProduct(producto: object){
        
        setProductos((prevProductos) => [...prevProductos, producto]);
    }

    console.log(productos);




    return(
        <div className="registro_venta_container">
            
            <h2>Registrar venta</h2>

            <FormularioRegistroVenta addProduct={addProduct}></FormularioRegistroVenta>

            <TablaVentaGalletas productos={productos}></TablaVentaGalletas>
        </div>
    )
}