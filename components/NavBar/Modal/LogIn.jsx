/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import DynamicInput from "../../DynamicInput";
import DynamicButton from "../../DynamicButton";


export default function LogIn(props) {
  const [data, setData] = useState({email : '', password : ''})
  
  const handleSubmit = async (event) => {
    event.preventDefault()
      try { 
        const response = await fetch('http://localhost:8080/clients/login', {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(data)
        })
        const res = await response.json()
        const token = res.data.token
        localStorage.setItem('tkn', token)
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
          // eslint-disable-next-line react/no-unknown-property
          class="w-48  d-block "
          src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/ingresar.png"
          alt=""
        />
      </div>

      <form className="mt-3" onSubmit={handleSubmit}>
        <DynamicInput
          value={data.email}
          name='email'
          type="email"
          className="mt-4 "
          label="Email address"
          classNameInput="w-full "
          classNameContainer=" mx-14"
          onChange={updateField}
        />

        <DynamicInput
          value={data.password}
          name='password'
          type="password"
          className="mt-4 "
          label="Password"
          classNameInput="w-full"
          classNameContainer=" mx-14"
          onChange={updateField}
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
