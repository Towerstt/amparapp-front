import Infographies from '../Infographies/Infographies'

export default function InfographiesEstructure(){

  //en esta funcion se harian los fetch de los datos de las infografias

  return(
    <section className="container-fluid p-5 infogaphy border">

        <div className="row d-flex justify-content-center p-0 p-md-5">
          <Infographies
            className="d-block"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon.causas.png"
            alt="causas activas"
            number={"55"}
            text={"Causas"}
          />
          <Infographies
            className="icon"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-firmas.png"
            alt="numero total de firmantes"
            number={100}
            text={"Firmas"}
          />
          <Infographies
            className="icon"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-amparos.png"
            alt="numero total de amparos ganados"
            number={100}
            text={"Amparos"}
          />


        </div>
    </section>


  )
}


