import { useState, useEffect } from 'react'
import Infographies from '../Infographies/Infographies'

export default function InfographiesEstructure(props){
  const [numberOfCases, setNumberCases] = useState(0)

  
  //Podríamos pasar esto a ServerSideRender porque serían datos estáticos cada vez que se carga la página.
  useEffect(() =>{
    fetch('http://localhost:8080/cases')
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      setNumberCases(data.data.allCases.length)})

  },[])



  return(
    <section className="container-fluid p-5 infogaphy border">

        <div className="row d-flex justify-content-center p-0 p-md-5">
          <Infographies
            className="d-block"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon.causas.png"
            alt="causas activas"
            number={props.usersCount}
            text="Usuarios activos"
          />
          <Infographies
            className="icon"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-firmas.png"
            alt="numero total de firmantes"
            number={props.signersCount}
            text={"Firmas"}
          />
          <Infographies
            className="icon"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-amparos.png"
            alt="numero total de amparos ganados"
            number={numberOfCases}
            text={"Amparos"}
          />


        </div>
    </section>


  )
}


