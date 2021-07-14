import Head from "next/head";
import { Fragment, useState } from "react";
import NavBarLoggeado from "../../components/NavBar/NavBarLoggeado";
import FooterEstructure from "../../components/Footer/FooterEsctructure";

import CaseCardsTimeLine from "../../components/TimeLine/CaseCardsTimeLine";
import ResumeLawyer from "../../components/TimeLine/ResumeLawyer";
import AddField from "../../components/TimeLine/AddField";
import VoidField from "../../components/TimeLine/VoidField";
import StatusSelector from "../../components/TimeLine/StatusSelector";


export default function timelineAbogado() {
  return (
    <Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
        <title>Timeline</title>
      </Head>
      <NavBarLoggeado
        fixedTop="true"
        rutalink="abogados"
        searchDisplay="true"
        pagos="abogados/pagos"
        editar="abogados/perfil"
        casos="abogados/casos"
        acerca="abogados/acerca"
        aviso="abogados/aviso"
        politicas="abogados/politicas"
      />
      <section className="container mt-20 pt-5  md:mt-14 xl:mt-20">
        
      </section>

      <CaseCardsTimeLine />

      <ResumeLawyer />
       
    
    
    <section className="container carga-caso mt-5">
        <form>

            <div className="d-block d-md-flex my-5">
                <AddField />
                <VoidField />

                
            </div>

            <div className="d-block d-md-flex my-5">
                <AddField />
                <StatusSelector />
            </div>

            <div className="d-block d-md-flex my-5">
                <AddField />
                
            </div>


            

            

            {/* <!-- AQUI EMPIEZA UN COMPONENTE--> */}
            <div class="d-block d-md-flex my-5">
                <div class="col-12 col-md-3 d-flex justify-content-center">
                    <div class="px-2 py-2">
                        <i class="far fa-plus-square text-success"></i>
                    </div>
                    <div class="form-group">
                        <select class="form-control" id="exampleFormControlSelect1">
                          <option>Agregar Campo</option>
                          <option> -- Status -- </option>
                          <option> -- Agregar Responsables -- </option>
                          <option> -- Adjuntar Documento -- </option>
                          <option> -- Agregar comentario -- </option>
                        </select>
                    </div>
                </div>

                <div class="col-12 col-md-9 border rounded shadow px-5 py-3">                    
                    
                    <div class="col-12 my-3">
                        <b>Adjuntar Documento:</b>
                    </div>

                    <div class="d-block d-md-flex my-3">
                        <div class="col-12 col-md-4 d-flex justify-content-center">
                            <div class="px-2 py-2">
                                <i class="far fa-plus-square text-success"></i>
                            </div>
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                <option>Agregar Campo</option>
                                <option> -- Adjuntar otro documento -- </option>
                                <option> -- Comentario -- </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-md-7 d-flex justify-content-center p-3 mb-2 bg-light text-dark">
                            <form>
                                <div class="form-group">
                                  <label for="exampleFormControlFile1">Example file input</label>
                                  <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                                </div>
                              </form>
                        </div>

                        <div class="col-12 col-md-1 d-flex justify-content-center px-2 py-2">
                            <i class="fas fa-minus-circle text-danger"></i>
                        </div>
                        
                    </div>

                    <div class="d-block d-md-flex my-3">
                        <div class="col-12 col-md-4 d-flex justify-content-center">
                            <div class="px-2 py-2">
                                <i class="far fa-plus-square text-success"></i>
                            </div>
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                <option>Agregar Campo</option>
                                <option> -- Adjuntar Documento -- </option>
                                <option> -- Comentario -- </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-md-7 d-flex justify-content-center">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Campo Obligatorio*"></textarea>
                        </div>
                        <div class="col-12 col-md-1 d-flex justify-content-center px-2 py-2">
                            <i class="fas fa-minus-circle text-danger"></i>
                        </div>
                    </div>

                    
                    
                    <div class="d-block d-md-flex my-3">
                        <div class="col-12 col-md-4 d-flex justify-content-center">
                            <div class="px-2 py-2">
                                <i class="far fa-plus-square text-success"></i>
                            </div>
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Agregar Campo</option>
                                    <option> -- Adjuntar otro documento -- </option>
                                </select>
                            </div>
                        </div>
                        
                       
                    </div>

                      <button type="submit" class="btn bg-secondary text-light mx-2 my-2">Guardar</button>

                </div>
            </div>
            {/* <!--AQUI TERMINA UN COMPONENTE--> */}


            {/* <!--AQUI EMPIEZA UN COMPONENTE--> */}
            <div class="d-block d-md-flex my-5">
                <div class="col-12 col-md-3 d-flex justify-content-center">
                    
                </div>

                <div class="col-12 col-md-9 border rounded shadow px-5 py-3 bg-light">                    
                    
                    <div class="col-12 my-3">
                        <b>Documentos Adjuntos</b>
                    </div>

                    <div class="d-block d-md-flex my-3">
                        <div class="col-12 col-md-4 d-flex justify-content-center">
                            <b>Documento:</b>
                        </div>
                        <div class="col-12 col-md-7 d-flex justify-content-center">
                            <button class="bg-light border-0 mx-5 my-2 px-2 px-md-5 py-2 d-flex justify-content-center align-items-center w-50 mx-auto">
                                <img class="mx-auto d-block w-25"src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-pdf.png" alt=""></img>
                                <b>Demanda.pdf</b>
                            </button>
                        </div>
                    </div>

                    <div class="d-block d-md-flex my-3">
                        <div class="col-12 col-md-4 d-flex justify-content-center">
                            <b>Comentario:</b>
                        </div>
                        <div class="col-12 col-md-7 d-flex justify-content-center">
                            <p>Se agrega resolucion por parte del juez</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--AQUI TERMINA UN COMPONENTE--> */}

            {/* <!-- AQUI EMPIEZA UN COMPONENTE--> */}
            <div class="d-block d-md-flex my-5">
                <div class="col-12 col-md-3 d-flex justify-content-center">
                    <div class="px-2 py-2">
                        <i class="far fa-plus-square text-success"></i>
                    </div>
                    <div class="form-group">
                        <select class="form-control" id="exampleFormControlSelect1">
                          <option>Agregar Campo</option>
                          <option> -- Status -- </option>
                          <option> -- Agregar Responsables -- </option>
                          <option> -- Adjuntar Documento -- </option>
                          <option> -- Agregar comentario -- </option>
                        </select>
                    </div>
                </div>

                <div class="col-12 col-md-9 border rounded shadow px-5 py-3">                    
                    
                    <div class="col-12 my-3">
                        <b>Adjuntar Documento:</b>
                    </div>

                

                    <div class="d-block d-md-flex my-3">
                        <div class="col-12 col-md-4 d-flex justify-content-center">
                            <div class="px-2 py-2">
                                <i class="far fa-plus-square text-success"></i>
                            </div>
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                <option>Agregar Campo</option>
                                <option> -- Adjuntar Documento -- </option>
                                <option> -- Comentario -- </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-md-7 d-flex justify-content-center">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Campo Obligatorio*"></textarea>
                        </div>
                        <div class="col-12 col-md-1 d-flex justify-content-center px-2 py-2">
                            <i class="fas fa-minus-circle text-danger"></i>
                        </div>
                    </div>

                    
                    
                    <div class="d-block d-md-flex my-3">
                        <div class="col-12 col-md-4 d-flex justify-content-center">
                            <div class="px-2 py-2">
                                <i class="far fa-plus-square text-success"></i>
                            </div>
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Agregar Campo</option>
                                    <option> -- Adjuntar otro documento -- </option>
                                </select>
                            </div>
                        </div>
                        
                       
                    </div>

                      <button type="submit" class="btn bg-secondary text-light mx-2 my-2">Guardar</button>

                </div>
            </div>
            {/* <!--AQUI TERMINA UN COMPONENTE--> */}


            {/* <!--AQUI EMPIEZA UN COMPONENTE--> */}
            <div class="d-block d-md-flex my-5">
                <div class="col-12 col-md-3 d-flex justify-content-center">
                    
                </div>

                <div class="col-12 col-md-9 border rounded shadow px-5 py-3 bg-light">                    
                    
                    <div class="col-12 my-3">
                        <b>Comentario del Abogado</b>
                    </div>


                    <div class="d-block d-md-flex my-3">
                        <div class="col-12 col-md-4 d-flex justify-content-center">
                            <b>Comentario:</b>
                        </div>
                        <div class="col-12 col-md-7 d-flex justify-content-center">
                            <p>El día de hoy se entrego el amparo al juez</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--AQUI TERMINA UN COMPONENTE--> */}


        </form>



    </section>

      <FooterEstructure />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />


    </Fragment>
  );
}
