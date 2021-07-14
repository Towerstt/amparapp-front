import Head from "next/head";
import { Fragment, useState } from "react";
import NavBarLoggeado from "../../components/NavBar/NavBarLoggeado";
import FooterEstructure from "../../components/Footer/FooterEsctructure";
import CardAdminCases from "../../components/UI-abogados/CardAdminCases";
import DynamicButton from "../../components/DynamicButton";

import FirmCasesEstructure from "../../components/CardCases/FirmCasesEstructure";
import ActiveCasesEstructure from "../../components/CardCases/ActiveCasesEstructure";
import CardCasesEstructure from "../../components/CardCases/CardCasesEstructure";

export default function ClientCasesPage() {
  //en esta funcion se haria el fetch para saber todos los casos asignados que tiene el cliente y se vacia la info en CardAdminCases
  // se crean 3 casos por fila en web, 1 caso por fila en mobile

  //el h2 que dice "¡Ooops, parece que aún no tienes casos firmados!" es dinamico, si el fetch sí trae casos, debería cambiar su estado a d-none
  const [showMessage, setShowMessage] = useState("d-block");

  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
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
        <title>Admin cases</title>
      </Head>
      <NavBarLoggeado
        fixedTop="true"
        rutalink="client"
        rutaSearch="client/search"
        pagos="client/pagos"
        editar="client/perfil"
        casos="client/casos"
        acerca="client/acerca"
        aviso="client/aviso"
        politicas="client/politicas"
      />
      <section className="container mt-20 pt-5  md:mt-14 xl:mt-20">
        <div>
          <img
            className="d-block mx-auto w-96"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/admin-casos.png"
            alt=""
          />
        </div>
        <div className={`flex justify-center mt-4 ${showMessage}`}>
          <h2 className="text-center">
            ¡Ooops, parece que aún no tienes casos firmados!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:hidden my-16">
          <FirmCasesEstructure />

          <ActiveCasesEstructure />
        </div>

        <div className=" hidden md:block container my-4 ">
          <div className="grid grid-cols-2  ">
            <div className="col-span-1 border-r-2 border-prussian">
              <div className="grid grid-cols-2">
                <div className="col-span-2 border-2  bg-honeyyellow rounded-lg shadow-sm	border-prussian mx-14 lg:mx-24 justify-center flex">
                  <p>Casos en firma</p>
                </div>
                <div className="col-span-2 xl:col-span-1">
                    <CardCasesEstructure />
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="grid grid-cols-2">
                <div className="col-span-2 border-2  bg-honeyyellow rounded-lg shadow-sm	border-prussian mx-14 lg:mx-24 justify-center flex">
                  <p>Casos Activos</p>
                </div>
                <div className="col-span-2       xl:col-span-1">
                  <CardAdminCases
                    link={`${"id"}`}
                    title={"title"}
                    responsibleUser={"responsibleUser"}
                    sentenceEffects={"sentenceEffects"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
