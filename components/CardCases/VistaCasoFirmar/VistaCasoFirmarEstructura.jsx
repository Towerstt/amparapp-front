
import Link from "next/link"

export default function VistaCasoFirmarEstructura(props){

/*
      sentenceEffects={props.data.sentenceEffects}
      cost={props.data.cost}
      
       
      
      imgProfile={props.data.imgProfile}
*/
  

  return(
    <section className="  mt-20 pt-5  md:mt-14 xl:mt-20 md:mx-16  xl:mx-20 " >
        <div className="grid grid-cols-6 mb-10">

          <div className="col-span-6 flex justify-center ">
            <h2 className=" text-2xl md:text-3xl text-center lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-12">{props.title}</h2>
          </div>

          <div className="col-span-6 md:col-span-3   md:m-4 h-48 md:h-auto xl:col-span-2 order-1">
            <img
              className=" h-full w-full shadow-lg md:border-honeyyellow md:border-2 "
              src={props.image}
              alt={props.title}
            />
          </div>

          <div className="col-span-6 md:col-span-3 xl:col-span-2  md:m-4 p-3 shadow-lg order-2 md:order-3 xl:order-2">
            <h2 className="text-xl font-medium lg:text-2xl">
              {props.plaint}
            </h2>
            <h4 className="font-bold mt-3 text-xl">Resumen:</h4>
            <p className="text-justify">{props.shortDescription}</p>
            <h4 className="font-bold mt-3 text-xl">Efectos de la demanda:</h4>
            <p className="text-justify">{props.sentenceEffects}</p>
            <h4 className="font-bold mt-3 text-xl">Costo de la demanda: <span className="">{`$${props.cost}`}</span> </h4>

          </div>

          <div className="col-span-6 md:col-span-3 xl:col-span-2  md:m-4  shadow-lg md:border-prussian md:border-2 order-3 md:order-2 xl:order3">
            <div className="grid grid-cols-2">
              <div className="col-span-2 w-full h-16 bg-prussian flex justify-center items-center">
                <p className="text-white text-2xl">Firma de Caso</p>
              </div>

              <div className="col-span-2">
                <div className="flex justify-start mt-8 mb-2 px-5">
                  <span>
                    <i className="fas fa-stopwatch mr-2"></i>
                  </span>
                  <p className="m-0">{props.limitDate}</p>
                </div>
                <div className="bg-warning p-1 mx-5 mb-2">
                  <div className="bg-dark w-50 p-1"></div>
                </div>
              </div>

              <div className="col-span-2 ">
                <div className="flex justifystart mt-3 px-5">
                  <span>
                    <i className="fas fa-signature mr-2"></i>
                  </span>
                  <p className="m-0">{props.signers}</p>
                </div>
                <div className="bg-warning p-1 mx-5 mb-2">
                  <div className="bg-dark w-50 p-1"></div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="px-5 py-3">
                  <span>
                    <b>Datos del Abogado:</b>
                  </span>
                  <div className="grid grid-cols-2">
                    <div className="col-span-1 mt-1"><p>Nombre:</p></div>
                    <div className="col-span-1 mt-1"><p>{`${props.name} ${props.lastName}`}</p></div>
                    <div className="col-span-1 mt-1"><p>Email:</p></div>
                    <div className="col-span-1 mt-1"><p>{props.email}</p> </div>
                    <div className="col-span-1 mt-1"><p>Cédula Profesional:</p> </div>
                    <div className="col-span-1 mt-1"><p>{props.idCard}</p> </div>
                    <div className="col-span-1 mt-1"><p>LinkedIn:</p> </div>
                    <div className="col-span-1 mt-1"><p>{props.linkedin}</p></div>
                    <div className="col-span-1 mt-1"><p>ONG</p></div>
                    <div className="col-span-1 mt-1"><p>{props.enterprise}</p></div>
                    <div className="col-span-1 mt-1"><p>website:</p></div>
                    <div className="col-span-1 mt-1"><p>{props.website}</p></div>
                  </div>
                </div>
              </div>
              <div className={`col-span-2 ${props.DontDisplayImgFirm&&'hidden'}`}>
                <Link href="/cases">
                <img
                  className="button-sing "
                  src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/firma-boton.png"
                  alt=""
                />
                </Link>

              </div>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 xl:col-span-2  md:m-4  shadow-lg md:border-prussian md:border-2 order-4">
            <div className="grid grid-cols-2">
              <div className="col-span-2 w-full h-16 bg-prussian flex justify-center items-center">
                <p className="text-white text-xl">Documentos descargables del caso</p>
              </div>

              <div className="col-span-2 flex justify-center my-2">

              <button className="bg-light border-0 mx-5 my-2 px-2 px-md-5 py-2 d-flex justify-content-center align-items-center w-50 ">
              <img
                className="mx-auto d-block w-25"
                src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-pdf.png"
                alt=""
              />
              <b>Demanda.pdf</b>
            </button>
              </div>

              
            
            </div>
          </div>
          <div className="col-span-6 xl:col-span-4  md:m-4  shadow-lg md:border-prussian md:border-2 order-5">
            <div className="grid grid-cols-2">
              <div className="col-span-2 w-full h-16 flex justify-center md:justify-start items-center">
                <p className=" text-xl text-center md:ml-4">Descripción del caso:</p>
              </div>

              <div className="col-span-2 flex justify-center px-4 pb-4">
                <p className="text-justify">{props.longDescription}</p>

              </div>

              
            
            </div>
          </div>



        </div>
      </section>
  )

}