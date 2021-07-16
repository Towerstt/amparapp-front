import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import NavBarLoggeado from "../../components/NavBar/NavBarLoggeado";
import FooterEstructure from "../../components/Footer/FooterEsctructure";
import DashboardEstructure from "../../components/Dashboard.jsx/DashboardEstructure";
import { setCurrentLawyer } from "../../lib/api";

//en esta funcion se haria el fetch para alimentar la navbar con el avatar del abogado y el nombre del abogado en el dashboard

export default function LawyerDashboard() {
  const [token, setTkn] = useState("");
  const [activeLawyer, setActiveLawyer] = useState();
  useEffect(async () => {
    const encryptedData = localStorage.getItem("tkn");
    setTkn(encryptedData);
    console.log("Encr", encryptedData);
    const response = await setCurrentLawyer(token);
    console.log(response);
    setActiveLawyer(response.lawyer);
  }, [token]);
  return (
    <Fragment>
      <Head>
        <title> DashBoard </title>
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
      </Head>
      <NavBarLoggeado
        user={activeLawyer ? activeLawyer[0]._id : ''}
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

      <DashboardEstructure
        text={`¡Hola ${activeLawyer ? activeLawyer[0].firstName : ''} ${activeLawyer ? activeLawyer[0].lastName : ''}!  ¡Bienvenido a tu Dashboard de ABOGADO!`}
        linkPerfil={`abogados/${activeLawyer ? activeLawyer[0]._id : ''}`}
        linkCasos={activeLawyer ? `abogados/${activeLawyer[0]._id}/cases` : 'abogados/casos'}
      />

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
