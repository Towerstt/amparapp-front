import { Fragment } from "react";
import Link from "next/link";
import VistaCasoFirmarEstructura from "./VistaCasoFirmarEstructura";


export default function VistaCasoFirmarDatos(props){


  //DontDisplayImgFirm="true"
  //path={`/abogados/${'id'}/cases/casos-en-firma/${'cfirma'}`}
      

  return(
    <Fragment>
      <VistaCasoFirmarEstructura
      DontDisplayImgFirm={props.DontDisplayImgFirm}
      
      /*
      image={props.data.image}
      title={props.data.title}
      shortDescription={props.data.shortDescription}
      longDescription={props.data.longDescription}
      sentenceEffects={props.data.sentenceEffects}
      plaint={props.data.plaint}
      cost={props.data.cost}
      limitDate={props.data.limitDate}
      signers={props.data.signers}
      
      responsibleUser={props.data.responsibleUser}
       
      name={props.data.name}
      lastName={props.data.lastName}
      email={props.data.email}
      idCard={props.data.idCard}
      imgProfile={props.data.imgProfile}
      linkedin={props.data.linkedin}
      enterprise={props.data.enterprise}
      website={props.data.website}
      */
      />
    </Fragment>
  )
}


