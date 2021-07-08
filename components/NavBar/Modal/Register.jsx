import { Fragment } from "react";
import DynamicInput from "../../DynamicInput";
import DynamicButton from "../../DynamicButton";

export default function Register(props) {
  return (
    <Fragment>
      <div className="flex justify-center">
        <img
          class="w-48  d-block "
          src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/registro.png"
          alt=""
        />
      </div>

      <form className="mt-3">
        <DynamicInput
          type="text"
          className="mt-4 "
          label="First Name"
          classNameInput="w-full "
          classNameContainer=" mx-24"
        />

        <DynamicInput
          type="text"
          className="mt-4 "
          label="Last Name"
          classNameInput="w-full"
          classNameContainer=" mx-24"
        />

        <DynamicInput
          type="email"
          className="mt-4 "
          label="email address"
          classNameInput="w-full"
          classNameContainer=" mx-24"
        />

        <DynamicInput
          type="password"
          className="mt-4 "
          label="Password"
          classNameInput="w-full"
          classNameContainer=" mx-24"
        />

        <div className="w-full flex justify-center">
          <DynamicButton
            className="bg-prussian rounded-lg shadow-sm my-4 "
            type="submit"
          >
            <p className="text-white m-2 ">Regístrate</p>
          </DynamicButton>
        </div>
      </form>
    </Fragment>
  );
}
