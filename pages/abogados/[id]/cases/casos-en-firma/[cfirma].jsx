import { Fragment } from "react";
import Link from "next/link";

import Head from "next/head";
import NavBarLoggeado from "../../../../../components/NavBar/NavBarLoggeado";
import FooterEstructure from "../../../../../components/Footer/FooterEsctructure";

export default function DetailCasoEnFirmaPage(props) {
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
        <title>Caso en firma</title>
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
      <section className="  mt-20 pt-5  md:mt-14 xl:mt-20 md:mx-16  xl:mx-20">
        <div className="grid grid-cols-6">
          <div className="col-span-6 flex justify-center ">
            <h2 className=" text-2xl md:text-3xl text-center lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-12">
              {"titulo del caso"}
            </h2>
          </div>

          <div className="col-span-6 md:col-span-3   md:m-4 h-48 md:h-auto xl:col-span-2 ">
            <img
              className=" h-full w-full shadow-lg md:border-honeyyellow md:border-2 "
              src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/matrimonio.png"
              alt=""
            />
          </div>

          <div className="col-span-6 md:col-span-3 xl:col-span-2  md:m-4 p-3 shadow-lg ">
            <h2 className="text-xl font-medium lg:text-2xl">
              {"slogan del caso"}
            </h2>
            <h4 className="font-bold mt-3 text-xl">Resumen:</h4>
            <p className="text-justify">{"resumen del caso"}</p>
          </div>

          <div className="col-span-6 md:col-span-3 xl:col-span-2  md:m-4  shadow-lg md:border-prussian md:border-2 ">
            <div className="grid grid-cols-2">
              <div className="col-span-2 w-full h-16 bg-prussian flex justify-center items-center">
                <p className="text-white text-2xl">Firma de Caso</p>
              </div>

              <div className="col-span-2">
                <div className="flex justify-start mt-12 mb-2 px-5">
                  <span>
                    <i className="fas fa-stopwatch mr-2"></i>
                  </span>
                  <p className="m-0">{"DD:HH:MM:SS"}</p>
                </div>
                <div className="bg-warning p-1 mx-5 mb-2">
                  <div className="bg-dark w-50 p-1"></div>
                </div>
              </div>

              <div className="col-span-2 ">
                <div className="flex justifystart mt-3 px-5">
                  <span>
                    <i className="fas fa-signature mr-2"></i>
                  </span>
                  <p className="m-0">{"48999"}</p>
                </div>
                <div className="bg-warning p-1 mx-5 mb-2">
                  <div className="bg-dark w-50 p-1"></div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="px-5 py-3">
                  <span>
                    <b>Nota del Abogado:</b>
                  </span>
                  <p className="text-justify mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>
              </div>
              <div className="col-span-2">
                <img
                  className="button-sing "
                  src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/firma-boton.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 xl:col-span-2  md:m-4  shadow-lg md:border-prussian md:border-2 ">
            <div className="grid grid-cols-2">
              <div className="col-span-2 w-full h-16 bg-prussian flex justify-center items-center">
                <p className="text-white text-xl">Documentos descargables del caso</p>
              </div>

              <div className="col-span-2">
              <button className="bg-light border-0 mx-5 my-2 px-2 px-md-5 py-2 d-flex justify-content-center align-items-center w-50 ">
              <img
                className="mx-auto d-block w-25"
                src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-pdf.png"
                alt=""
              />
              <b>Demanda.pdf</b>
            </button>

              </div>
              <button className="bg-light border-0 mx-5 my-2 px-2 px-md-5 py-2 d-flex justify-content-center align-items-center w-50 ">
              <img
                className="mx-auto d-block w-25"
                src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-imagen.png"
                alt=""
              />
              <b>Prueba A</b>
            </button>
              <div className="col-span-2 ">
              <button className="bg-light border-0 mx-5 my-2 px-2 px-md-5 py-2 d-flex justify-content-center align-items-center w-50 ">
              <img
                className="mx-auto d-block w-25"
                src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-video.png"
                alt=""
              />
              <b>Audiencia</b>
            </button>
              </div>
              <div className="col-span-2">
              <button className="bg-light border-0 mx-5 my-2 px-2 px-md-5 py-2 d-flex justify-content-center align-items-center w-50 ">
              <img
                className="mx-auto d-block w-25"
                src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-audio.png"
                alt=""
              />
              <b>Entrevista</b>
            </button>
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
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossOrigin="anonymous"
      ></script>
    </Fragment>
  );
}

/*

          <div className="col-12 col-md-7 card border-0 shadow m-0 mx-md-2 my-5 p-5 ">
            <h3>Caso:</h3>
            <p className="text-justify">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
        </div>
      </section>
      */
