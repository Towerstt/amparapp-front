import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import NavBarLoggeado from "../../../components/NavBar/NavBarLoggeado";
import FooterEstructure from "../../../components/Footer/FooterEsctructure";
import ClientProfileEdit from "../../../components/UI-Client/ClientProfileEdit";
import { getUserData } from "../../../lib/api";
import LawyerProfileEdit from "../../../components/UI-abogados/LawyerProfileEdit";

export default function EditClientProfilePage(props) {
  console.log("edit", props.id)
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
        <title>Edita tu Perfil</title>
      </Head>

      <NavBarLoggeado
        userId = {props.id}
        fixedTop="true"
        rutalink="abogados"
        rutaSearch="abogados/search"
        pagos="abogados/pagos"
        editar="abogados/perfil"
        casos="abogados/casos"
        acerca="abogados/acerca"
        aviso="abogados/aviso"
        politicas="abogados/politicas"
      />

      <section className="container mt-20 pt-5  md:mt-14 xl:mt-20">
        <img
          className="d-block mx-auto w-96 "
          src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/perfil.png"
          alt=""
        />
        <LawyerProfileEdit userId = {props.id}/>

      </section>

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
      <FooterEstructure />
    </Fragment>
  );
}

export async function getServerSideProps (context) {
  const id = context.params.id
  return {props : {
    id
  }}

} 
