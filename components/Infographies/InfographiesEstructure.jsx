import { useState, useEffect } from 'react'
import Infographies from '../Infographies/Infographies'

export default function InfographiesEstructure(props){
  return(
    <section className="container-fluid p-5 infogaphy border">

        <div className="row d-flex justify-content-center p-0 p-md-5">
          <Infographies
            className="icon infographies"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon.causas.png"
            alt="causas activas"
            number={props.usersCount}
            text="Usuarios activos"
          />
          <Infographies
            className="icon infographies"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-firmas.png"
            alt="numero total de firmantes"
            number={props.signersCount}
            text={"Firmas"}
          />
          <Infographies
            className="icon infographies"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-amparos.png"
            alt="numero total de amparos ganados"
            number={props.casesCount}
            text={"Amparos"}
          />


        </div>
    </section>


  )
}


