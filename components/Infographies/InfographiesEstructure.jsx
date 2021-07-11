import { useState } from 'react'
import Infographies from '../Infographies/Infographies'

export default function InfographiesEstructure(){
  const [numberOfCases, setNumberCases] = useState(0)
  const [numerOfUsers, setNumberUsers] = useState(0)
  const [numberOfSigners, setNumberSigners] = useState(0)
  const users = {}
  
  //Podríamos pasar esto a ServerSideRender porque serían datos estáticos cada vez que se carga la página.
  fetch('http://localhost:8080/cases')
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      setNumberCases(data.data.allCases.length)})

  fetch('http://localhost:8080/clients')
    .then(res => res.json())
    .then(data => {
      let allusers = Object.values(data.data.allUsers)
      let signers = 0
      allusers.map(el => {
        if (el.casesSigned){
          signers = signers + Object.keys(el.casesSigned).length
        }
      })
      setNumberUsers(data.data.allUsers.length)
      setNumberSigners(signers)
    })

  return(
    <section className="container-fluid p-5 infogaphy border">

        <div className="row d-flex justify-content-center p-0 p-md-5">
          <Infographies
            className="d-block"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon.causas.png"
            alt="causas activas"
            number={numerOfUsers}
            text="Usuarios activos"
          />
          <Infographies
            className="icon"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-firmas.png"
            alt="numero total de firmantes"
            number={numberOfSigners}
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


