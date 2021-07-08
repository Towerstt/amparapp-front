import { useState } from "react";
import { Fragment } from "react";

import LogIn from "./LogIn";
import Register from "./Register";

import { XCircleIcon } from "@heroicons/react/solid";
import DynamicButton from "../../DynamicButton";

import ForgetPassword from "./Forget";


//me falta agregar que al picar afuera de la modal se cierre

export default function Modal() {
  const [showModal, setShowModal] = useState(false);


  const [active, setActive] = useState("d-block");
  const [passive, setPassive] = useState("d-none");


  const [forget, setForget] = useState('a')
  const [forgetDisplay, setForgetDisplay] = useState('d-none')


  const changeLog = () => {
    let isTheme = active === "d-block" ? "d-none" : "d-block";
    let isPassive = passive === "d-none" ? "d-block" : "d-none";
    setTimeout(() => {
      setActive(isTheme);
      setPassive(isPassive);
    }, 100);
  };

  const changeScreen=()=>{
    let isForget = forget === 'a'? 'd-none': 'a'
    setForget(isForget)
    setActive('d-none')
    setForgetDisplay('d-block')
      

  }

  const closeModal= ()=>{
    setShowModal(false)
    setForgetDisplay('d-none')
    setActive("d-block")
    setPassive("d-none")
    setForget('a')

  }

  return (
    <Fragment>
      <span className="p-3">
        <button type="button" onClick={() => setShowModal(true)}>
          <i className="fas fa-user"></i>
        </button>
      </span>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded shadow relative   w-full h-full bg-white outline-none focus:outline-none">
                <div className="flex justify-end">
                  <DynamicButton
                  onClick={closeModal}
                  >
                    <XCircleIcon className="w-10 m-2 " />

                  </DynamicButton>
                  
                </div>
                <h1 className={`my-2 mx-16  text-6xl ${forget}`}> ¡Bienvenide!</h1>

                {/*toogle*/}
                <div className={`flex justify-content-center ${forget} `}>
                  <label className="switch">
                    <input type="checkbox" />
                    <span onClick={changeLog} className="slider round"></span>
                  </label>
                </div>

                <div className={`${passive}`}>
                <Register />
                </div>

                <div className={`${active}`}>
                  <LogIn />
                </div>

                <div className={`${forgetDisplay}`}>
                  <ForgetPassword/>
                </div>
                <div className="flex justify-center">

                <DynamicButton
                className={` w-56 border-0 ${forget, active}`}
                type="text"
                onClick={changeScreen}
              >
                ¿Olvidaste tu contraseña?
              </DynamicButton>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      
    </Fragment>
  );
}


