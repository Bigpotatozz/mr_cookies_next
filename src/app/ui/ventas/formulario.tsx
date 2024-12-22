'use client'
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { useState } from "react";


export default function FormularioVentas({changeDates}) {

    const [value_buscador, setValueBuscador] = useState<string>('');
    const [datetime12h, setDateTime12h] = useState<Date | null>(null);
    const [datetime12h2, setDateTime12h2] = useState<Date | null>(null);


    function handleDateChange(){
        changeDates(datetime12h, datetime12h2);
    }



    return (

        <section className='registro_venta'>
            <div className='input_container'>
                <p>Desde:</p>
                <Calendar value={datetime12h} onChange={(e) => setDateTime12h(e.value || null)} showTime hourFormat="12" />
            </div>

            <div className='input_container'>
                <p>Hasta:</p>
                <Calendar value={datetime12h2} onChange={(e) => setDateTime12h2(e.value || null)} showTime hourFormat="12" />
            </div>

            <div className="botones">
                <Button className="boton" label="Filtrar" severity="info" outlined onClick={handleDateChange} />

                <Button className = "boton" label="Limpiar" severity="secondary" outlined />
            </div>

            <InputText value={value_buscador} onChange={(e) => setValueBuscador(e.target.value)} />
        </section>
    )
}