import { Fragment } from "react";
import Link from "next/link";

import Head from "next/head";
import NavBarLoggeado from "../../../../../components/NavBar/NavBarLoggeado";
import FooterEstructure from "../../../../../components/Footer/FooterEsctructure";
import DynamicInput from "../../../../../components/DynamicInput";
import DynamicButton from "../../../../../components/DynamicButton";
import Image from "next/image";

export default function DetailActiveCasePage() {
  return (
    <Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
        <title>Caso Activo</title>
      </Head>

      <NavBarLoggeado
        fixedTop="true"
        rutalink="abogados"
        searchDisplay="true"
        pagos={`abogados/${"id"}/pagos`}
        editar={`abogados/${"id"}/perfil`}
        casos={`abogados/${"id"}/cases`}
        acerca={`abogados/${"id"}/about`}
        aviso={`abogados/${"id"}/aviso`}
        politicas={`abogados/${"id"}/politicas`}
      />

      <section className="  mt-20 pt-5  md:mt-14 xl:mt-20 md:mx-10  xl:mx-20 ">
        <div className="grid grid-cols-6 mb-10">
          <div className="col-span-6 flex justify-center ">
            <img
              className="d-block mx-auto md:w-1/2"
              src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/linea-del-tiempo.png"
              alt=""
            />{" "}
          </div>

          <div className="col-span-6 md:col-span-2   md:m-4 h-48 md:h-80  ">
            <img
              className=" h-full w-full shadow-lg md:border-honeyyellow md:border-2 "
              src={
                "https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/matrimonio.png"
              }
              alt={"props.title"}
            />
          </div>

          <div className="col-span-6 md:col-span-4 mt-3 md:m-4  shadow-lg  rounded-lg ">
            <div className="grid grid-cols-2">
              <div className="col-span-2 w-full h-16 bg-prussian flex justify-center items-center rounded-lg">
                <p className="text-white text-2xl">Matrimonio Igualitario</p>
              </div>
            </div>

            <div className="p-3">
              <h2 className="text-xl font-medium lg:text-2xl">
                {"props.plaint"}
              </h2>
              <h4 className="font-bold mt-3 text-xl">Resumen:</h4>
              <p className="text-justify">{"props.shortDescription"}</p>
              <h4 className="font-bold mt-3 text-xl">Efectos de la demanda:</h4>
              <p className="text-justify">{"props.sentenceEffects"}</p>
            </div>
          </div>

          <div className="col-span-6  mt-3  md:m-4  shadow-lg md:border-prussian md:border-2 rounded-lg ">
            <div className="grid grid-cols-2">
              <div className="col-span-2 ">
                <div className="px-3 md:px-5 py-3 ">
                  <span>
                    <p className="font-bold text-2xl place-self-center">
                      Datos del Abogado:
                    </p>
                  </span>
                  <div className="grid grid-cols-2 md:grid-cols-4">
                    <div className="col-span-1 mt-1">
                      <p className="font-bold">Nombre:</p>
                    </div>
                    <div className="col-span-1 mt-1">
                      <p>{`${"props.name"} ${"props.lastName"}`}</p>
                    </div>
                    <div className="col-span-1 mt-1">
                      <p className="font-bold">Email:</p>
                    </div>
                    <div className="col-span-1 mt-1">
                      <p>{"props.email"}</p>{" "}
                    </div>
                    <div className="col-span-1 mt-1">
                      <p className="font-bold">Cédula Prof:</p>{" "}
                    </div>
                    <div className="col-span-1 mt-1">
                      <p>{"props.idCard"}</p>{" "}
                    </div>
                    <div className="col-span-1 mt-1">
                      <p className="font-bold">LinkedIn:</p>{" "}
                    </div>
                    <div className="col-span-1 mt-1">
                      <p>{"props.linkedin"}</p>
                    </div>
                    <div className="col-span-1 mt-1">
                      <p className="font-bold">ONG</p>
                    </div>
                    <div className="col-span-1 mt-1">
                      <p>{"props.enterprise"}</p>
                    </div>
                    <div className="col-span-1 mt-1">
                      <p className="font-bold">website:</p>
                    </div>
                    <div className="col-span-1 mt-1">
                      <p>{"props.website"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-6 mt-3  md:m-4 md:mx-28 lg:mx-52 xl:mx-72 shadow-lg md:border-prussian md:border-2 rounded-lg ">
            <div className="grid grid-cols-2">
              <div className="col-span-2 mx-3 mt-3 ">
                <p className="font-bold">Actualiza el status del caso:</p>
              </div>
              <div className="col-span-2 m-3 ">
                <div className="d-flex ">
                  <select id="inputState" className="form-control">
                    <option selected>Actualizar caso:</option>
                    <option className="text-success">Activo</option>
                    <option className="text-secondary">Suspendido</option>
                    <option className="text-dark">En apelación</option>
                    <option className="text-dark">
                      En espera de Resolución
                    </option>
                    <option className="text-dark">Cerrado</option>
                  </select>
                  <button
                    type="submit"
                    className="btn bg-prussian text-light mx-2"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-6 mt-3  md:m-4 md:mx-28 lg:mx-52 xl:mx-72 shadow-lg rounded-lg  ">
            <div className="grid grid-cols-2">
              <div className="col-span-2 w-full h-16 bg-honeyyellow flex justify-center items-center rounded-lg">
                <p className="text-white text-2xl">Entradas nuevas del caso:</p>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="col-span-2 m-3">
                Nombre de la etapa o del escrito:
              </div>
              <div className="col-span-2">
                <DynamicInput
                  type="text"
                  className=" px-3 "
                  label="etapa o escrito"
                  classNameInput=" form-control   "
                  classNameContainer=" "
                />
              </div>
              <div className="col-span-2 m-3">
                Fecha de recepción o presentación del evento:
              </div>
              <div className="col-span-2">
                <DynamicInput
                  type="date"
                  className=" px-3 "
                  classNameInput=" form-control   "
                  classNameContainer=" "
                />
              </div>
              <div className="col-span-2 m-3">
                Breve explicación del evento:
              </div>
              <div className="col-span-2 mx-3">
                <textarea
                  className="form-control  "
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Explicalo de forma accesible a los clientes"
                ></textarea>
              </div>
              <div className="col-span-2 m-3">
                Ajunta el documento para su descarga:
              </div>
              <div className="col-span-2 ">
                <DynamicInput
                  type="file"
                  className=" px-3 "
                  classNameInput=" form-control  rounded-lg"
                  classNameContainer=""
                />
              </div>
              <div className="col-span-2 m-3 flex justify-center">
                <DynamicButton
                  className="bg-prussian rounded-lg shadow-sm my-4 "
                  type="submit"
                >
                  <p className="text-white mx-4 my-2 ">
                    Genera nueva entrada
                  </p>
                </DynamicButton>
              </div>
            </div>
          </div>

          <div className="col-span-6  mt-3  md:m-4  shadow-lg md:border-prussian md:border-2 rounded-lg ">
            <div className=" flex justify-center bg-honeyyellow     mx-12 md:mx-40  lg:mx-64 xl:mx-96 rounded-lg mt-3">
              <p className="font-bold">status del caso: {"en apelacion"}</p>
            </div>

            <div className="scrollmenu">

              <div className=" inline-block">
                <div className="flex items-center">
                  <div className="  p-3 border-2 border-prussian rounded-lg w-96 my-4 ml-4 mr-2 h-auto 	">
                    <div className="grid grid-cols-2 	whitespace-normal">
                      <div className="col-span-2">
                        <p className="font-bold text-xl text-center mb-2">
                          Escrito de recepcion de demanda inicial de amparo{" "}
                        </p>{" "}
                      </div>
                      <div className="col-span-2">
                        <p className="text-center mb-2">
                          Fecha del evento: 10/10/10
                        </p>{" "}
                      </div>
                      <div className="col-span-2 ">
                        {" "}
                        <p className="  text-justify mb-2	">
                          Mediante el presente escrito se nos comunica que el
                          tribunal decimo sexto de distrtito acepto a tramite la
                          demanda inicial de amparo, lo cual indica que empezo
                          el juicio de amparo formalmente
                        </p>{" "}
                      </div>
                      <div className="col-span-2 flex justify-center">
                        <button>
                          {" "}
                          <i className="  fas fa-file-download fa-3x"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <i className="fas fa-arrow-right fa-4x"></i>
                </div>
              </div>


              <div className=" inline-block">
                <div className="flex items-center">
                  <div className="  p-3 border-2 border-prussian rounded-lg w-96 my-4 ml-4 mr-2 h-auto 	">
                    <div className="grid grid-cols-2 	whitespace-normal">
                      <div className="col-span-2">
                        <p className="font-bold text-xl text-center mb-2">
                          Escrito de recepcion de demanda inicial de amparo{" "}
                        </p>{" "}
                      </div>
                      <div className="col-span-2">
                        <p className="text-center mb-2">
                          Fecha del evento: 10/10/10
                        </p>{" "}
                      </div>
                      <div className="col-span-2 ">
                        {" "}
                        <p className="  text-justify mb-2	">
                          Mediante el presente escrito se nos comunica que el
                          tribunal decimo sexto de distrtito acepto a tramite la
                          demanda inicial de amparo, lo cual indica que empezo
                          el juicio de amparo formalmente
                        </p>{" "}
                      </div>
                      <div className="col-span-2 flex justify-center">
                        <button>
                          {" "}
                          <i className="  fas fa-file-download fa-3x"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <i className="fas fa-arrow-right fa-4x"></i>
                </div>
              </div>




              

              <div className="inline-block border-2 w-96 m-4 h-64">
                <div className="grid grid-cols-2">
                  <div className="col-span-2">a</div>
                  <div className="col-span-2">b</div>
                  <div className="col-span-2">c</div>
                  <div className="col-span-2">d</div>
                </div>
              </div>

              <div className="inline-block border-2 w-96 m-4 h-64">
                <div className="grid grid-cols-2">
                  <div className="col-span-2">a</div>
                  <div className="col-span-2">b</div>
                  <div className="col-span-2">c</div>
                  <div className="col-span-2">d</div>
                </div>
              </div>

              <div className="inline-block border-2 w-96 m-4 h-64">
                <div className="grid grid-cols-2">
                  <div className="col-span-2">a</div>
                  <div className="col-span-2">b</div>
                  <div className="col-span-2">c</div>
                  <div className="col-span-2">d</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterEstructure displayRegister="true" />

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
      {/* <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossOrigin="anonymous"
      ></script> */}
    </Fragment>
  );
}
