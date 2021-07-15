import { useState, useEffect } from "react"

export default function ResumeLawyer(){
    return(
        <section className="container mt-5 carga-caso">

            <div className="d-block d-md-flex">
                <div className="col-12 col-md-3">
                    <h2>Resumen Abogado:</h2>
                </div>
            </div>

            <div className="d-block d-md-flex">
                <div className="col-12 col-md-3">
                </div>
                <div className="col-12 col-md-9 d-block d-md-flex border p-4 mx-auto row bg-light">                    
                    <div className="col-8"><span class="mr-2"><b>Nombre:</b></span>  Juan de Dios Vargas Natividad</div> 
                    <div className="col-4"><span class="mr-2"><b>Cedula:</b></span> C-5767678796898</div>

                    <div className="col-4 mt-2"><span class="mr-2"><b>Email:</b></span>  juan@correo.com</div> 
                    <div className="col-4 mt-2"><span class="mr-2"><b>Telefono:</b></span> 55 5555 5555</div>
                    <div className="col-4 mt-2"><span class="mr-2"><b>Empresa:</b></span> Fundacion Amparo</div>

                    <div className="col-12 mt-2"><span class="mr-2"><b>Linkedin:</b></span> www.linkedin.com/juanvargas</div>
                    <div className="col-12 mt-3"><span class="mr-2"><b>Sntesis:</b></span> Abogado especializado en Derecho Penal con amplia experiencia profesional en los bufetes Martínez Ibáñez Abogados y Legálitas, de Salamanca. Profundos conocimientos del Código Penal y experiencia en la defensa de clientes que se enfrentaban a juicios por delitos tipificados en el mismo. Aprendizaje constante y formación continuada en nuevas leyes.</div>
                </div>
            </div>


        </section>
    )
}