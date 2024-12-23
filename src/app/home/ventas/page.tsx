'use client'
import TablaVentas from "@/app/ui/ventas/tabla";
import '../../ui/ventas/ventas.css'
import FormularioVentas from "@/app/ui/ventas/formulario";
import { useState } from "react";


export default function Ventas() {


    const [fechaInicio, setFechaInicio] = useState<Date | null>(null);

    const [fechaFin, setFechaFin] = useState<Date | null>(null);
    const [buscador, setBuscador] = useState<string>('');

    function changeDates(fechaInicio: Date | null, fechaFin: Date | null ){
        setFechaInicio(fechaInicio);
        setFechaFin(fechaFin);
    }

    function buscar(busqueda: string){
        setBuscador(busqueda);
    }

    return (
        <>

            <div className="ventas_container">

                <FormularioVentas changeDates={changeDates} buscar={buscar}></FormularioVentas>

                <TablaVentas precio={`${buscador}`} fecha_inicio={fechaInicio} fecha_fin={fechaFin}></TablaVentas>
            </div>

        </>
    )
}