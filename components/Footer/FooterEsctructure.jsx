/* eslint-disable @next/next/no-img-element */
import { Fragment, useState} from "react";
import DynamicButton from "../DynamicButton";
import DynamicInput from "../DynamicInput";
import Modal from "../NavBar/Modal/Modal";
import Icons from "../Icons";
import { suscribeNewsletter } from "../../lib/api";

export default function FooterEstructure(props) {
  const [email, setEmail] = useState('')
  return (
    <Fragment>
      <section className="container-fluid footer bg-light border-top">
        <div className="row p-5">
          <div className="col-12 col-md-4 px-0 px-md-5">
            <img
              className="d-block mx-auto w-100 mb-4"
              src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/logo-slogan-icon.png"
              alt=""
            />
          </div>
          <div className="col-12 col-md-4 d-none d-md-block ">
            <h2>Nuestra iniciativa</h2>
            <p>
              Le damos voz a las causas en México, tramitamos amparos de forma
              digital. Nosotros somos Alza la Voz, una iniciativa digital.
              Juntos hemos desarrollado un proyecto que conjunte a los mejores
              abogados para poderle dar causa legal a las quejas.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <h2>Suscríbete</h2>

            <form>
              <div className="form-row align-items-center ">
                <div className="col-sm-12 my-1">
                  <DynamicInput
                    value={email}
                    name="email"
                    type="text"
                    className="mt-2 "
                    id="inlineFormInputName"
                    label="Registra tu email"
                    classNameInput="w-full"
                    onChange={e => {setEmail(e.target.value)}}
                  />
                </div>
                <div
                  className={` col-sm-6 my-1 ${
                    props.displayRegister && "hidden"
                  }`}
                >
                  <DynamicButton
                    className="btn btn-primary bg-prussian"
                    type="submit"
                    onClick={(e) => suscribeNewsletter(e.nativeEvent.path[3][0].value)}
                  >
                    Regístrate
                  </DynamicButton>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 text-center p-5">
          Copyright © 2021 Derechos Reservados
        </div>
      </section>
      <section className="d-flex d-lg-none align-items-center Larger shadow p-3 navbar-mobile">
        <div className="col-3">
          <div className="btn-group dropup">
            <button
              type="button"
              className="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <a>Acerca de Nosotros</a>
                </li>
                <li>
                  <a>Registro</a>
                </li>
                <li>
                  <a>Aviso de Privacidad</a>
                </li>
                <li>
                  <a>Póliticas de Pago</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-3">
          <span className="p-3">
            <i className="far fa-question-circle"></i>
          </span>
        </div>
        <div className="col-3">
          <span className="p-3">
            <Icons source="fas fa-search" link="search" />
          </span>
        </div>
        <div className="col-3">
          <span className="p-3">
            <Icons source="fas fa-user" link="login" />
          </span>
        </div>
      </section>
    </Fragment>
  );
}
