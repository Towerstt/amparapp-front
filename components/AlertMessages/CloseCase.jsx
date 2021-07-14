import { useState, useEffect } from "react"

export default function CloseCase(){
    return(
        <div className="col-12 col-md-9">
            <div className="col-sm-12 my-3">
                <div className="alert alert-info d-block d-md-flex justify-content-around align-items-center shadow border-0 bg-secondary text-light" role="alert">
                    El abogado ha cambiado el status del caso a Cerrado
                    <small className="text-light">DD/MM/AAAA HH:MM:SS</small>
                </div>
            </div>
        </div>
    )
}