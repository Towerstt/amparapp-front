import { Fragment, useState, useEffect } from "react";

import Head from "next/head";
import NavBarLoggeado from "../../../../components/NavBar/NavBarLoggeado";
import FooterEstructure from "../../../../components/Footer/FooterEsctructure";
import VistaCasoFirmar from "../../../../components/CardCases/VistaCasoFirmar/VistaCasoFirmarDatos"
import { getCase } from "../../../../lib/api";

export default function LoggedDetailCasoEnFirmaPage(props) {
  console.log('LDCSDDFSDf', props)
  const [caseData, setCaseData] = useState('')
    useEffect(async () => { 
      const response = await getCase(props.caseId)
      console.log(response[0])
      setCaseData(response[0])
    },[])
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
        rutalink="client"
        searchDisplay="true"
        pagos={`client/${props.id}/pagos`}
        editar={`client/${props.id}/perfil`}
        casos={`client/${props.id}/cases`}
        acerca={`client/${props.id}/about`}
        aviso={`client/${props.id}/aviso`}
        politicas={`client/${props.id}/politicas`}
      />
      <VistaCasoFirmar 
      DontDisplayImgFirm="true"
      data={caseData}
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


export function getServerSideProps (context) {
  const caseId = context.params.caseId
  return {props : {
    caseId
  }}
}