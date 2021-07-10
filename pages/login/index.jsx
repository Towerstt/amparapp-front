import { Fragment } from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar/NavBar";
import FooterEstructure from "../../components/Footer/FooterEsctructure";
import LogIn from "../../components/NavBar/Modal/LogIn";
import DynamicButton from "../../components/DynamicButton";

export default function LogInPage() {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
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

      <NavBar fixedTop="true"  />

      <div className="text-center mt-28 ">
        <h3 className="mb-2">¡Bienvenide!</h3>
        <DynamicButton
          className="bg-transparent rounded-lg mb-4 mt-2 w-56"
          type="text"
          link="login/register"
        >
          <p className="text-black">¿Aún no tienes una cuenta?</p>{" "}
        </DynamicButton>

        <LogIn />

        <DynamicButton
          className="bg-transparent rounded-lg mb-4 mt-2 w-56"
          type="text"
          link="login/forgetPassword"
        >
          <p className="text-honeyyellow">Olvidé mi contraseña</p>{" "}
        </DynamicButton>


        
      </div>

      <FooterEstructure />
    </Fragment>
  );
}
