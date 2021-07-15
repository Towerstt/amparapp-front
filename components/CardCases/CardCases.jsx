import { Fragment } from "react";
import Link from "next/link";


export default function CardCases(props) {
const {keyid, image, altImage, title, aditionals, shortDescription, limitDate, totalSigners, path } = props
  return (
    <Fragment>
      <Link href={path}>
      <div key={keyid} className="col-span-2 md:col-span-1 card-case-green d-block d-md-flex justify-content-center border-left rounded shadow mb-5 mb-md-5  mx-auto my-0 w-full">
        <img
          className="case-img m-3"
          src={image}
          alt={altImage}
        />
        <div className="p-3 bg-light">
          <h3>{title}</h3>
          <h4>{aditionals}</h4>
          <span>{shortDescription}</span>
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
          <img
            className="button-sing"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/firma-boton.png"
            alt=""
          />
        </div>
      </div>
      </Link>
    </Fragment>
  );
}
