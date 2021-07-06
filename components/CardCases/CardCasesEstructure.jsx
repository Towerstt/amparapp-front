
import CardCasesData from "./CardCasesData"

export default function CardCasesEstructure(){

  return(

    <section className="container-fluid bg-light p-0 pt-5 pb-5 p-md-5 shadow-sm causes-cards">
        <div className="row d-flex align-items-center flex-column">
          <h1>Fírmalo</h1>
          <h2>Casos Activos</h2>
          <div className="container">
            <div className="grid  grid-cols-2   p-0   ">
              <CardCasesData />
            </div>
          </div>
        </div>
      </section>


  )
}