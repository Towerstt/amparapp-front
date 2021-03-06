import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import NavBarLoggeado from "../../../../components/NavBar/NavBarLoggeado";
import FooterEstructure from "../../../../components/Footer/FooterEsctructure";
import CardAdminCases from "../../../../components/UI-abogados/CardAdminCases";
import DynamicButton from "../../../../components/DynamicButton";
import FirmCasesEstructure from "../../../../components/CardCases/FirmCasesEstructure";
import ActiveCasesEstructure from "../../../../components/CardCases/ActiveCasesEstructure";
import CardCasesEstructure from "../../../../components/CardCases/CardCasesEstructure";
import { getLawyerData } from "../../../../lib/api";
import LoggedCardCasesEstructure from "../../../../components/CardCases/LoggedCardCases/LoggedCardCasesEstructure";
import { getCasesInfo } from "../../../../lib/api";
import Image from "next/image";

export default function AdminCasesPage(props) {
  console.log('AdminCases', props)
  const activeLawyerId = props.id;
  const [data, setData] = useState({ signed: "", active: "" });
  const [activeLawyer, setActiveLawyer ] = useState('')

  useEffect(async () => {
    const currentLawyer = await getLawyerData(activeLawyerId)
    console.log('CL', currentLawyer)
    setActiveLawyer(currentLawyer.lawyer)
    const response = await getCasesInfo();
    const allCases = response.allCases;
    console.log("Values", Object.values(allCases));
    const casesSigned = Object.values(allCases).filter((el) => {
      el.responsibleUser === activeLawyerId;
    });
    setData({ ...data, signed: casesSigned });
    const today = new Date();
    const activeCases = casesSigned.filter((el) => {
      el.limitDate < today ? el : "";
    });
    setData({ ...data, active: activeCases });
  }, []);

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
        user = {props.id}
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
      <section className="container mt-20 pt-5  md:mt-14 xl:mt-20 ">
        <div>
        <img
            className="d-block mx-auto w-96"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/admin-casos.png"
            alt=""
          />
        </div>
        <div className={`flex justify-center mt-4  hidden md:block`}>
          <h2 className="text-center ">
            {data.signed
              ? ""
              : "??Ooops, parece que a??n no tienes casos creados!"}
          </h2>
        </div>

        <div className="flex justify-center mt-4   ">
          <DynamicButton
          userId={activeLawyerId}
            className="bg-prussian rounded-lg shadow-sm  w-auto"
            link={`/abogados/${activeLawyerId}/cases/create-case`}
          >
            <p className="text-white m-2 text-2xl">Crea un nuevo caso</p>
          </DynamicButton>
        </div>

        <div className="grid grid-cols-1 md:hidden my-16">
          <FirmCasesEstructure data={data.signed} />

          <ActiveCasesEstructure data={data.active} />
        </div>

        <div className=" hidden md:block container my-4 ">
          <div className="grid grid-cols-2  ">
            <div className="col-span-1 border-r-2 border-prussian">
              <div className="grid grid-cols-2">
                <div className="col-span-2 border-2  bg-honeyyellow rounded-lg shadow-sm	border-prussian mx-14 lg:mx-24 justify-center flex">
                  <p>Casos en firma</p>
                </div>
                <div className="col-span-2 xl:col-span-1">
                  <LoggedCardCasesEstructure userId = {props.id} data={data.signed}/>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="grid grid-cols-2">
                <div className="col-span-2 border-2  bg-honeyyellow rounded-lg shadow-sm	border-prussian mx-14 lg:mx-24 justify-center flex">
                  <p>Casos Activos</p>
                </div>
                <div className="col-span-2      lg:mx-12">
                  <CardAdminCases
                  data={data.active}
                    link={`/abogados/${activeLawyerId}/cases/casos-activos/${"cactivo"}`}
                    title={"title"}
                    responsibleUser={activeLawyer._id}
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

export function getServerSideProps(context) {
  const id = context.params.id;
  return {
    props: {
      id,
    },
  };
}
