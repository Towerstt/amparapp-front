import Faqs from "./Faqs";
import { Fragment } from "react";
export default function FaqsEstructure() {
  return (
    <Fragment>
      <Faqs
        id={"headingOne"}
        dataTarget="#collapseOne"
        ariaControls="collapseOne"
        number={'1'}
        question="¿Cómo puedo firmar una petición?"
        collapse="collapse show"
        answer="Para firmar una petición es necesario tener una cuenta en ALZA LA VOZ, solo tienes que ingresar a la sección de REGISTRO y en menos de un minuto podrás crear una cuenta nueva."
      />
      <Faqs
        id={"headingTwo"}
        dataTarget="#collapseTwo"
        ariaControls="collapseTwo"
        number={'2'}
        question="¿Cualquiera puede subir un caso?"
        collapse="collapse "
        answer="Por el momento solo la Asociación Civil Alza la Voz puede
        crear nuevas peticiones de CAUSA, sin embargo te
        recomendamos contactarnos para escuchar tu petición."
      />
      <Faqs
        id={"headingThree"}
        dataTarget="#collapseThree"
        ariaControls="collapseThree"
        number={'3'}
        question="¿Firmar tiene algún costo?"
        collapse="collapse "
        answer="Para ser parte de cualquier proceso de solicitud de amparo
        es necesario firmar una causa, entregar la documentación
        necesaria y pagar una cuota de servicios de gestión."
      />
      

    </Fragment>
  );
}

