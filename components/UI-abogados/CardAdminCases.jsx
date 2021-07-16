import Link from "next/link";
import Image from 'next/image'

export default function CardAdminCases(props) {
  console.log('CardAdmin', props)
  return (
    <div className="col-span-1">
      <div className="d-block d-md-flex justify-content-around align-items-center container-cards-case">

        <Link href={props.link}>
          <div className="card-case card p-5 mt-4 w-full md:w-5/6  ">
            <Image
              className="d-block mx-auto "
              src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-case.png"
              alt=""
            />
            <span>Caso:</span>
            <h2>{props.title}</h2>
            <span>Solicitante:</span>
            <h3>{props.responsibleUser}</h3>
            <span>Solicitud:</span>
            <p>{props.sentenceEffects}</p>
            <button className="bg-honeyyellow rounded-lg p-2 w-auto place-self-center mt-4">Administrar</button>
          </div>
        </Link>

      </div>
    </div>
  );
}
