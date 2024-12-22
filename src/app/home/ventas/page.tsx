'use client'
import TablaVentas from "@/app/ui/ventas/tabla";
import '../../ui/ventas/ventas.css'
import FormularioVentas from "@/app/ui/ventas/formulario";
import { useState } from "react";


export default function Ventas() {


    const [fechaInicio, setFechaInicio] = useState<Date | null>(null);

    const [fechaFin, setFechaFin] = useState<Date | null>(null);

    function changeDates(fechaInicio: Date, fechaFin: Date){

        setFechaInicio(fechaInicio);
        setFechaFin(fechaFin);
    }

    console.log(fechaInicio, fechaFin);

    return (
        <>

            <div className="ventas_container">

                <FormularioVentas changeDates={changeDates}></FormularioVentas>

                <TablaVentas precio='' fecha_inicio={fechaInicio} fecha_fin={fechaFin}></TablaVentas>
            </div>

        </>
    )
}