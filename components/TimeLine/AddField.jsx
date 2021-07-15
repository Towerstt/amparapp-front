import { useState, useEffect } from "react"

export default function AddField(){
    return(
        <div className="col-12 col-md-3 d-flex justify-content-center">
            <div className="px-2 py-2">
                <i className="far fa-plus-square text-success"></i>
            </div>
            <form>
                <div className="form-group">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Agregar Campo</option>
                        <option> -- Status -- </option>
                        <option> -- Agregar Responsables -- </option>
                        <option> -- Adjuntar Documento -- </option>
                        <option> -- Agregar comentario -- </option>
                    </select>
                </div>
            </form>
        </div>
    )
}