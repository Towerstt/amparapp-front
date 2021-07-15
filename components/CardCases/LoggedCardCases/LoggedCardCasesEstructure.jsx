
import { Fragment } from "react";
import Link from "next/link";

export default function LoggedCardCasesEstructure(props){

  const {keyid, image, altImage, title, aditionals, plaint, limitDate, totalSigners, id } = props

  return(
    <Fragment>
      <div className="col-span-1">
      <div className="d-block d-md-flex justify-content-around align-items-center container-cards-case ">
      <Link href={`/abogados/${id}/cases/casos-en-firma/${keyid}`}>
      
      <div key={keyid} className="  block  justify-center border-left rounded shadow-sm  "  >
        
        <div className="border-8">
            <img
              className="  bg-contain shadow-lg md:border-honeyyellow md:border-2 "
              src={image}
              alt={title}
            />
          </div>

        <div className="p-3 bg-light">
          <h3>{title}</h3>
          <h4>{aditionals}</h4>
          <span>{plaint}</span>
          <div className="d-flex justify-content-start mt-2">
            <span>
              <i className="fas fa-stopwatch"></i>
            </span>
            <p className="m-0">{limitDate}</p>
          </div>
          <div className="bg-warning p-1">
            <div className="bg-dark p-1 w-25"></div>
          </div>
          <div className="d-flex justify-content-start mt-2">
            <span>
              <i className="fas fa-signature"></i>
            </span>
            <p className="m-0">{totalSigners}</p>
          </div>
          <div className="bg-warning p-1">
            <div className="bg-dark w-25 p-1"></div>
          </div>
          
        </div>
      </div>
      </Link>
          

      </div>
    </div>

    </Fragment>
  )
}


    /*
    
      */