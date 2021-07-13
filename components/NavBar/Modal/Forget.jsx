import { Fragment, useState } from "react";
import DynamicInput from "../../DynamicInput";
import DynamicButton from "../../DynamicButton";
// 
import ResetMail from "../../../pages/login/resetMail";

export default function ForgetPassword() {
  const [email, setEmail] = useState('')

  


  return (
    <Fragment>
      <div className="flex justify-center">
        <img
          class="w-48  d-block "
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
          onChange={e => {
            localStorage.setItem('temp-mail', e.target.value)
            setEmail(e.target.value)}}
        />

        <div className="w-full flex-col flex items-center">
          <DynamicButton
            className="bg-prussian rounded-lg shadow-sm my-4 w-24"
            type="submit"
          >
            <p className="text-white m-2 ">ENVIAR </p>
          </DynamicButton>
        </div>
      </form>
    </Fragment>
  );
}
