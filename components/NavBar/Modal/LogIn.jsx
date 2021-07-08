import { Fragment } from "react";
import DynamicInput from "../../DynamicInput";
import DynamicButton from "../../DynamicButton";


export default function LogIn(props) {
  return (
    <Fragment>
      
      <div className="flex justify-center">
        <img
          class="w-48  d-block "
          src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/ingresar.png"
          alt=""
        />
      </div>

      <form className="mt-3">
        <DynamicInput
          type="email"
          className="mt-4 "
          label="Email address"
          classNameInput="w-full "
          classNameContainer=" mx-14"
        />

        <DynamicInput
          type="password"
          className="mt-4 "
          label="Password"
          classNameInput="w-full"
          classNameContainer=" mx-14"
        />

        <div className="w-full flex-col flex items-center">
          <DynamicButton
            className="bg-prussian rounded-lg shadow-sm my-4 w-28"
            type="submit"
          >
            <p className="text-white m-2 ">Inicia sesión</p>
          </DynamicButton>
        </div>
      </form>
    </Fragment>
  );
}
