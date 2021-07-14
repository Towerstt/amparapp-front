import { useState, useEffect } from "react"

export default function StatusSelector(){
    return(
        <div className="col-12 col-md-9"> 
                <form className="d-flex border rounded mb-5 p-3 shadow">
                    <select id="inputState" className="form-control">
                        <option selected>Actualizar caso:</option>
                        <option className="text-success">Activo</option>
                        <option className="text-secondary">Suspendido</option>
                        <option className="text-dark">Cerrado</option>
                        <option className="text-dark">Recepción de firmas</option>
                        <option className="text-dark">En espera de Resolución</option>
                        <option className="text-danger">Caso Cancelado</option>
                    </select>
                    <button type="submit" className="btn bg-secondary text-light mx-2">Guardar</button>
                </form>
        </div>
    )
}