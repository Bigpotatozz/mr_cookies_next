import FormularioRegistroVenta from "@/app/ui/ventas/registrar_venta/formulario_venta";

export default function RegistrarVenta(){
    return(
        <div className="registro_venta_container">
            
            <h2>Registrar venta</h2>

            <FormularioRegistroVenta></FormularioRegistroVenta>
        </div>
    )
}