import Head from "next/head";
import { Fragment } from "react";
import NavBar from "../../components/NavBar";
import CardCasesEstructure from "../../components/CardCases/CardCasesEstructure";
import DynamicInput from "../../components/DynamicInput";

export default function SearchPage() {
  return (
    <Fragment>
      <Head>
        <title>search</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        ></link>
        <link rel="stylesheet" href="style.css"></link>
      </Head>
      <NavBar />
      <div className="container max-w-full shadow-sm bg-hero-pattern bg-cover ">
        <div className="grid grid-cols-2 ">
          <div className="col-span-2 text-4xl font-bold mt-8 flex justify-center	">
            ¡Busca los casos que más te interesen!
          </div>
          <div className="col-span-2 mt-8 flex justify-center mb-20">
            <DynamicInput
              type="text"
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4"
              id="inlineFormInputName"
              placeholder="Busca un caso"
            />
          </div>
          

        </div>
      </div>
      <section className="container-fluid bg-light p-0 pt-5 pb-5 p-md-5 shadow-sm causes-cards">
        <div className="row d-flex align-items-center flex-column">
          <CardCasesEstructure />
        </div>
      </section>
    </Fragment>
  );
}
