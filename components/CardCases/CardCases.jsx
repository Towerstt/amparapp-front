import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";


export default function CardCases(props) {
const {keyid, image, altImage, title, aditionals, shortDescription, limitDate, totalSigners, path,plaint } = props
  const months = ['0', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const day = limitDate.split(' ')[0]
  const month = limitDate.split(' ')[2]
  const numberMonth = months.findIndex(el => el === month)
  const year = limitDate.split(' ')[3]
  const today = new Date
  const width = numberMonth - today.getMonth()+1 === 0 ? 25 : numberMonth - today.getMonth()+1 < 6 ? 50 : numberMonth - today.getMonth()+1 < 9 ? 75 : 100
  console.log(numberMonth - today.getMonth()+1, width)
  const signersWidth = totalSigners < 20 ? 0 : totalSigners < 50 ? 25 : totalSigners < 100 ? 50 : totalSigners < 200 ? 75 : 100

  return (
    <Fragment>
      <Link href={path}>
      <div key={keyid} className="col-span-2 md:col-span-1 card-case-green d-block d-md-flex justify-content-center align-items-center border-left rounded shadow mb-3 mb-md-3  mx-auto my-0 w-full">
        <img
          className="case-img m-3"
          src={image}
          alt={altImage}
        />
        <div className="p-3 bg-light">
          <h3 className="text-left">{title}</h3>
          <span >{plaint}</span>
          <div className="d-flex justify-content-start mt-2">
            <span>
              <i className="fas fa-stopwatch"></i>
            </span>
            <p className="m-0">{limitDate}</p>
          </div>
          <div className="bg-warning p-1">
            <div className={`bg-dark p-1 w-${width}`}></div>
          </div>
          <div className="d-flex justify-content-start mt-2">
            <span>
              <i className="fas fa-signature"></i>
            </span>
            <p className="m-0">{totalSigners}</p>
          </div>
          <div className="bg-warning p-1">
            <div className={`bg-dark p-1 w-${signersWidth}`}></div>
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
