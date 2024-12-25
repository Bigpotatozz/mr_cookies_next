'use client'
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import '../ventas/ventas.css'


interface FormularioVentasProps {
    changeDates: (date1: Date | null, date2: Date | null) => void;
    buscar: (busqueda: string) => void;
}

export default function FormularioVentas({ changeDates, buscar }: FormularioVentasProps) {

    const [date, setDate1] = useState<Date | null>(null);
    const [date2, setDate2] = useState<Date | null>(null);


    function handleDateChange(){
        changeDates(date, date2);
    }

    function clearDate(){
        setDate1(null);
        setDate2(null);
        changeDates(null, null);
    }

    return (

        <section className='registro_venta'>
            <div className='input_container'>
                <p>Desde:</p>
                <Calendar value={date} onChange={(e) => setDate1(e.value ?? null)} dateFormat="dd/mm/yy" />
            </div>

            <div className='input_container'>
                <p>Hasta:</p>
                <Calendar value={date2} onChange={(e) => setDate2(e.value ?? null)} dateFormat="dd/mm/yy" />
            </div>

            <div className="botones">
                <Button className="boton" label="Filtrar" severity="info" outlined onClick={handleDateChange} />

                <Button className = "boton" label="Limpiar" severity="secondary" outlined onClick={clearDate} />
            </div>

            <InputText  onChange={(e) => buscar(e.target.value)} />
        </section>
    )
}