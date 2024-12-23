'use client'
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

export default function FormularioRegistroVenta() {

    const opciones_venta = ['Peso', 'Cantidad monetaria', 'Unidad']

    const [selectedOption, setSelectedOption] = useState<string>('');

    return (
        <div className="formulario_registro_venta_container">

            <Dropdown value={selectedOption} onChange={(e) => setSelectedOption(e.value)} options={opciones_venta} optionLabel="name"
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}