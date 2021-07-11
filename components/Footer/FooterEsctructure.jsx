/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import DynamicButton from "../DynamicButton";
import DynamicInput from "../DynamicInput";
import Modal from '../NavBar/Modal/Modal'
import Icons from "../Icons";


export default function FooterEstructure() {
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
            <p>
              Le damos voz a tus causas en México, tramitamos amparos de forma
              digital.
            </p>
          </div>
          <div className="col-12 col-md-4 d-none d-md-block ">
            <h2>Información</h2>
            <p>
              <a href="#"> Acerca de Nosotros</a>
            </p>
            <p>
              <a href="#">Registro</a>
              <Modal/>
            </p>
            <p>
              <a href="#">Aviso de Privacidad</a>
            </p>
            <p>
              <a href="#">Póliticas de Pago</a>
            </p>
          </div>
          <div className="col-12 col-md-4">
            <h2>Suscríbete</h2>

            <form>
              <div className="form-row align-items-center ">
                <div className="col-sm-12 my-1">
                  <DynamicInput
                    type="text"
                    className="mt-2 "
                    id="inlineFormInputName"
                    label="Registra tu email"
                    classNameInput="w-full"
                  />
                </div>
                <div className="col-sm-6 my-1 ">
                  <DynamicButton className="btn btn-primary bg-prussian" type="submit">Regístrate</DynamicButton>
                 
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
          <Icons source="fas fa-search" link='search'/>
          </span>
        </div>
        <div className="col-3">
          <span className="p-3">
            <Icons source="fas fa-user" link='login'/>

          </span>
        </div>
      </section>
    </Fragment>
  );
}
