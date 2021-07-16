import Head from "next/head";
import { Fragment, useState } from "react";
import CardCasesEstructure from "../../components/CardCases/CardCasesEstructure";
import DynamicInput from "../../components/DynamicInput";
import FooterEstructure from "../../components/Footer/FooterEsctructure";
import NavBarLoggeado from "../../components/NavBar/NavBarLoggeado";

export default function SearchClient() {
  const[dataToSearch, setDataToSearch] = useState('')


  return (
    <Fragment>
      <Head>
        <title>Busca un caso</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
        ></link>
        <link rel="stylesheet" href="style.css"></link>
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
      <div className="container max-w-full shadow-sm bg-hero-pattern bg-cover mt-20  md:mt-14 xl:mt-20">
        <div className="grid grid-cols-2 ">
          <div className="col-span-2 text-4xl font-bold mt-8 flex justify-center	">
            ¡Busca los casos que más te interesen!
          </div>
          <div className="col-span-2 mt-8 flex justify-center mb-20">
            <DynamicInput
              type="text"
              className=" "
              label="Busca un caso"
              classNameInput="w-full  "
              classNameContainer="md:mx-28"
              onChange={e => setDataToSearch(e.target.value)}
            />
          </div>
        </div> 
      </div>
      <section className="container-fluid bg-light p-0 pt-5 pb-5 p-md-5 shadow-sm causes-cards">
        <div className="row d-flex align-items-center flex-column">
          <CardCasesEstructure data={dataToSearch}/>
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
