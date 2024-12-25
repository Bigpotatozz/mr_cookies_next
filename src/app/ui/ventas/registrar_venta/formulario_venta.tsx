'use client'
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import '../ventas.css'

interface FormularioRegistroVentaProps {
    addProduct: (product: { tipo_venta: string; nombre: string; cantidad: string }) => void;
}

export default function FormularioRegistroVenta({ addProduct }: FormularioRegistroVentaProps) {

    const opciones_venta = ['Peso', 'Cantidad monetaria', 'Unidad'];
    const productos = [{ nombre: 'Vainilla', precio: 200 }, { nombre: 'Chocolate', precio: 500 }, { nombre: 'Vainilla deluxe', precio: 100 }];

    const productos_name = productos.map((producto) => {
        return producto.nombre;
    })

    const [selectedOption, setSelectedOption] = useState<string>('');
    const [selectedCookie, setSelectedCookie] = useState<string>('');
    const [cantidad, setCantidad] = useState<string>('');


    function addProductToCart(product: { tipo_venta: string; nombre: string; cantidad: string }){
        addProduct(product);
    }


    return (
        <div className="formulario_registro_venta_container">

            <Dropdown value={selectedOption} onChange={(e) => setSelectedOption(e.value)} options={opciones_venta} optionLabel="name"
                placeholder="Tipo de venta" className="w-full md:w-14rem button_bottom_form" />

            <InputText keyfilter="int" placeholder="Cantidad" value={cantidad} onChange={(e) => { setCantidad(e.target.value) }} className="button_bottom_form" />

            <Dropdown value={selectedCookie} onChange={(e) => setSelectedCookie(e.value)} options={productos_name} optionLabel="name"
                placeholder="Producto" className="w-full md:w-14rem button_bottom_form" />

            <Button label="Agregar al carrito" icon="pi pi-shopping-cart" iconPos="right" className="button_bottom_form" onClick={() => {addProductToCart({tipo_venta: selectedOption, nombre: selectedCookie, cantidad: cantidad})}}/>
        </div>
    )
}
