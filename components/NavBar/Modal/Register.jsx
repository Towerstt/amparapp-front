/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import DynamicInput from "../../DynamicInput";
import DynamicButton from "../../DynamicButton";
import {useRouter} from 'next/router'
import { postNewUser } from "../../../lib/api";

export default function Register(props) {
  const history = useRouter()
  const [data, setData] = useState({firstName : '', lastName : '', email : '', password : ''})
  
  const handleSubmit = async (event) => {
    event.preventDefault()
      try {
        const newUser = await postNewUser(data)
        const token = newUser.token
        localStorage.setItem('tkn', token)
        history.reload(window.location)

      }
      catch (error) {
      
      }
    
  }

  const updateField = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };


  return (
    <Fragment>
      <div className="flex justify-center">
        <img
          className="w-48  d-block "
          src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/registro.png"
          alt=""
        />
      </div>

      <form className="mt-3" onSubmit={handleSubmit}>
        <DynamicInput
          value={data.firstName}
          name='firstName'
          type="text"
          className="mt-4 "
          label="First Name"
          classNameInput="w-full "
          classNameContainer=" mx-24"
          onChange={updateField}
        />

        <DynamicInput
          value={data.lastName}
          name='lastName'
          type="text"
          className="mt-4 "
          label="Last Name"
          classNameInput="w-full"
          classNameContainer=" mx-24"
          onChange={updateField}
        />

        <DynamicInput
          value={data.email}
          name='email'
          type="email"
          className="mt-4 "
          label="email address"
          classNameInput="w-full"
          classNameContainer=" mx-24"
          onChange={updateField}
        />

        <DynamicInput
          value={data.password}
          name='password'
          type="password"
          className="mt-4 "
          label="Password"
          classNameInput="w-full"
          classNameContainer=" mx-24"
          onChange={updateField}
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
