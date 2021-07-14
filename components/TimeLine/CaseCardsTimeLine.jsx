import { useState, useEffect } from "react"

export default function CaseCardsTimeline(){
    return(
        <section className="container sign-page">

            <img className="d-block mx-auto w-75" src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/linea-del-tiempo.png" alt=""></img>

            <div className="d-block d-md-flex">
                <div className="col-12 col-md-4 card border-0 shadow m-0 m-md-2 p-0 ">
                    <img className="mx-auto w-100 h-100 d-inline-block" src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/matrimonio.png" alt=""></img>
                </div>
                <div className="col-12 col-md-4 card border-0 shadow m-0 m-md-2 p-4">
                    <h2>Nos juntamos para decir ¡Si quiero!</h2>
                    <h3>Resumen:</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
                <div className="col-12 col-md-4 card border-0 shadow m-0 m-md-2 p-0">
                    <div className="p-3 bg-blue">
                        <div className="text-light text-center">Firma de Caso</div>
                    </div>


                    <div className="d-flex justify-content-start mt-5 px-5">
                        <span><i className="fas fa-stopwatch"></i></span>
                        <p className="m-0">DD:HH:MM:SS</p>
                    </div>
                    <div className="bg-warning p-1 mx-5 mb-2">
                        <div className="bg-dark w-50 p-1"></div>
                    </div>
                    <div className="d-flex justify-content-start mt-2 px-5">
                        <span><i className="fas fa-signature"></i></span>
                        <p className="m-0">48999</p>
                    </div>
                    <div className="bg-warning p-1 mx-5">
                        <div className="bg-dark w-50 p-1"></div>
                    </div>
                    <div className="px-5 py-3">
                        <span><b>Nota del Abogado:</b></span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                    </div>
                </div>
            </div>
        </section>
    )
}