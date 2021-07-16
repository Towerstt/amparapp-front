/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import DynamicInput from "../../DynamicInput";
import DynamicButton from "../../DynamicButton";
import { useRouter } from "next/router";
import { login } from "../../../lib/api";

export default function LogIn(props) {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
    checkbox: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userLoggedIn = await login(data);
      const token = userLoggedIn.token;
      localStorage.setItem("tkn", token);
      if(data.checkbox){
        router.push("/abogados");
      }
      else{
        router.push("/client");
      }
      
    } catch (error) {}
  };

  const updateField = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <div className="flex justify-center authFFF">
        <img
          // eslint-disable-next-line react/no-unknown-property
          className="w-48 d-block "
          src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/ingresar.png"
          alt=""
        />
      </div>

      <form className="mt-3 form-auth" onSubmit={handleSubmit}>
        <DynamicInput
          value={data.email}
          name="email"
          type="email"
          className="mt-4 "
          label="Email address"
          classNameInput="w-full "
          classNameContainer=" mx-14"
          onChange={updateField}
        />

        <DynamicInput
          value={data.password}
          name="password"
          type="password"
          className="mt-4 "
          label="Password"
          classNameInput="w-full"
          classNameContainer=" mx-14"
          onChange={updateField}
        />

        <div className="flex mt-6">
          <label className="flex items-center">
            <input type="checkbox" name='checkbox' value={data.checkbox} onChange={(e => setData({ ...data, checkbox: e.target.checked}))}/>
            <span className="ml-2">
              Soy Abogado
            </span>
          </label>
        </div>

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
