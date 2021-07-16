import { Fragment } from "react";

export default function SelectLawyerComponent(props) {
  return (
    <Fragment>
      
      <div className="block md:flex">
        <div className="col-12 col-md-3">
          <h2>Abogado:</h2>
        </div>
        <div className="col-12 col-md-9">
          <select id="inputState" className="form-control">
            <option selected>Seleccionar Abogado...</option>
            <option>Rodrigo Jaureb</option>
            <option>Hugo Torres</option>
            <option>Juan de Dios Vargas</option>
          </select>
        </div>
      </div>

      <div className="d-block d-md-flex my-3">
        <div className="col-12 col-md-3"></div>
        <div className="col-12 col-md-9 d-block d-md-flex border p-4 mx-auto row bg-light">
          <div className="col-8">
            <span className="mr-2">
              <b>Nombre:</b>
            </span>{" "}
            Juan de Dios Vargas Natividad
          </div>
          <div className="col-4">
            <span className="mr-2">
              <b>Cedula:</b>
            </span>{" "}
            C-5767678796898
          </div>

          <div className="col-4 mt-2">
            <span className="mr-2">
              <b>Email:</b>
            </span>{" "}
            juan@correo.com
          </div>
          <div className="col-4 mt-2">
            <span className="mr-2">
              <b>Telefono:</b>
            </span>{" "}
            55 5555 5555
          </div>
          <div className="col-4 mt-2">
            <span className="mr-2">
              <b>Empresa:</b>
            </span>{" "}
            Fundacion Amparo
          </div>

          <div className="col-12 mt-2">
            <span className="mr-2">
              <b>Linkedin:</b>
            </span>{" "}
            www.linkedin.com/juanvargas
          </div>
          <div className="col-12 mt-3">
            <span className="mr-2">
              <b>Sntesis:</b>
            </span>{" "}
            Abogado especializado en Derecho Penal con amplia experiencia
            profesional en los bufetes Martínez Ibáñez Abogados y Legálitas, de
            Salamanca. Profundos conocimientos del Código Penal y experiencia en
            la defensa de clientes que se enfrentaban a juicios por delitos
            tipificados en el mismo. Aprendizaje constante y formación
            continuada en nuevas leyes.
          </div>
        </div>
      </div>
      
      
    </Fragment>
  );
}
