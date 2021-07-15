
import Head from "next/head";
import { Fragment } from "react";
import NavBarLoggeado from "../../../../components/NavBar/NavBarLoggeado";
import FooterEstructure from "../../../../components/Footer/FooterEsctructure";
import PaymentsRow from "../../../../components/UI-abogados/PaymentsRow";

export default function PaymentsPage() {
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
        <title>Pagos</title>
      </Head>
      <NavBarLoggeado
      fixedTop="true" 
      rutalink='abogados' 
      searchDisplay='true'
      pagos={`abogados/${'id'}/pagos`}
        editar={`abogados/${'id'}/perfil`}
        casos={`abogados/${'id'}/cases`}
        acerca={`abogados/${'id'}/about`}
        aviso={`abogados/${'id'}/aviso`}
        politicas={`abogados/${'id'}/politicas`}
      />
      <section className="container mt-20 pt-5  md:mt-14 xl:mt-20 mb-28">
        <div>
          <img
            className="d-block mx-auto w-50"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/pagos.png"
            alt=""
          />
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cliente</th>
              <th scope="col">ID. Cliente</th>
              <th scope="col">Caso</th>
              <th scope="col">Status</th>
              <th scope="col">Monto</th>
              <th scope="col">Fecha</th>
            </tr>
          </thead>


          <tbody>
            <PaymentsRow
            number={'1'}
            client={'rodrigo jauregui'}
            clientId={'1234'}
            title={'matrimonio igualitario'}
            paymentStatus={'PAGADO'}
            ammount={'1000'}
            date={'01/01/2021'}
            />

            
           


          </tbody>

          <thead className="">
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">TOTAL:</th>
              <th scope="col">$500</th>
              <th scope="col"></th>
            </tr>
          </thead>
        </table>
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
