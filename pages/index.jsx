import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Modal from "../components/NavBar/Modal/Modal";
import CardCasesEstructure from "../components/CardCases/CardCasesEstructure";
import InfographiesEstructure from "../components/Infographies/InfographiesEstructure";
import FaqsEstructure from "../components/FAQS/FAQSEstructure";
import DynamicButton from "../components/DynamicButton";
import FooterEstructure from "../components/Footer/FooterEsctructure";
import NavBarLoggeado from "../components/NavBar/NavBarLoggeado";
import {
  getCasesInfo,
  getClientsInfo,
  setCurrentLawyer,
  setCurrentUser,
} from "../lib/api";
export default function Home(props) {
  const [hiddenNavBar, setHiddenNavBar] = useState("hidden");

  const [token, setTkn] = useState("");
  const [activeUser, setActiveUser] = useState("");
  const [usertype, setUserType] = useState("");

  useEffect(async () => {
    const encryptedData = localStorage.getItem("tkn");

    if (encryptedData) {
      setHiddenNavBar("");
      setTkn(encryptedData);
      const responseUser = await setCurrentUser(token);
      const responseLawyer = await setCurrentLawyer(token);

      if (responseUser.User.length === 0) {
        setActiveUser(responseLawyer.lawyer);
        setUserType("abogados");
      } else {
        setActiveUser(responseUser.User);
        setUserType("client");
      }
    }
  }, [token]);

  return (
    <Fragment>
      <Head>
        <title> Alza la Voz! </title>
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

      <div className="">
        <NavBar bgTransparent="" fixedTop="true" />
      </div>
      <div className={`${hiddenNavBar}`}>
        <NavBarLoggeado
          user={activeUser ? activeUser[0]._id : ""}
          fixedTop="true"
          searchDisplay={usertype === "abogados" ? "true" : ""}
          rutalink={usertype}
          rutaSearch={`${usertype}/search`}
          pagos={`${usertype}/pagos`}
          editar={`${usertype}/perfil`}
          casos={`${usertype}/casos`}
          acerca={`${usertype}/acerca`}
          aviso={`${usertype}/aviso`}
          politicas={`${usertype}/politicas`}
        />
      </div>

      <section className="container-fluid p-5 p-md-0 bg-hero-pattern bg-cover bla">
        <main>
          <div className="cover-main">
            <img
              className="mx-auto w-50 d-block "
              src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/slogan.png"
              alt=""
            />
          </div>
        </main>
      </section>

      <section className="container-fluid bg-light p-0 pt-5 pb-5 p-md-5 shadow-sm causes-cards">
        <div className="row d-flex align-items-center flex-column">
          <h1>Fírmalo</h1>
          <h2 className="mb-10">Casos Activos</h2>
          <CardCasesEstructure />
        </div>
      </section>

      <InfographiesEstructure
        signersCount={props.numberOfSigners}
        usersCount={props.numberOfUsers}
        casesCount={props.numberOfCases}
      />

      <section className="container-fluid p-5 d-none d-md-block ">
        <div className="d-flex justify-content-center align-items-center faqs ">
          <div className="col-md-4">
            <img
              className="mx-auto d-block w-75"
              src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/FAQs.png"
              alt=""
            />
          </div>

          <div className="col-md-8 ">
            <div className="accordion" id="accordionExample">
              <FaqsEstructure />
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid p-5 registro d-none d-md-block">
        <div className="row m-5">
          <DynamicButton className="Regular border-0 shadow-sm d-flex align-items-center w-25 mx-auto">
            <img
              className="d-block w-100 mx-auto"
              src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/registrate.png"
              alt=""
            />
            <Modal />
          </DynamicButton>
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

export async function getServerSideProps(context) {
  const casesInfo = await getCasesInfo();

  const clientsInfo = await getClientsInfo();
  return {
    props: {
      numberOfUsers: clientsInfo.count,
      numberOfSigners: clientsInfo.signersCount,
      numberOfCases: casesInfo.count,
    },
  };
}
