import { Fragment, useEffect, useState } from "react";
import DynamicInput from "../../DynamicInput";
import DynamicButton from "../../DynamicButton";
import { passwordRecovery } from "../../../lib/api";
import Image from "next/image";

export default function ForgetPassword() {
  const [email, setEmail] = useState('')  


  return (
    <Fragment>
      <div className="flex justify-center">
      <img
          className="w-48  d-block "
          src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/recuperar.png"
          alt=""
        />
      </div>
      <p className="mx-6">
        Te enviaremos una notificacion al correo de tu cuenta
      </p>

      <form className="mt-3">
        <DynamicInput
          value={email}
          name='email'
          type="email"
          className="mt-4 "
          label="Email address"
          classNameInput="w-full "
          classNameContainer=" mx-14"
          onChange={e => {setEmail(e.target.value)}}
        />

        <div className="w-full flex-col flex items-center">
          <DynamicButton
            className="bg-prussian rounded-lg shadow-sm my-4 w-24"
            type="submit"
            onClick={(e) => passwordRecovery(e.nativeEvent.path[3][0].value)}
          >
            <p className="text-white m-2 ">ENVIAR </p>
          </DynamicButton>
        </div>
      </form>
    </Fragment>
  );
}
