import { useState, useEffect } from "react"

export default function AwaitingCase(){
    return(
        <div className="col-12 col-md-9">
            <div className="col-sm-12 my-3">
                <div className="alert alert-info d-block d-md-flex justify-content-around align-items-center shadow border-0 bg-info text-light" role="alert">
                    El caso esta en espera de resolución
                    <small className="text-light">DD/MM/AAAA HH:MM:SS</small>
                </div>
            </div>
        </div>
    )
}