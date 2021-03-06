import DynamicInput from "../DynamicInput";
import DynamicButton from "../DynamicButton";
import { useState } from "react";
import { editUserData } from "../../lib/api";
import { useRouter } from "next/router";

export default function ClientProfileEdit(props) {
  console.log('CPE',props)
  const router = useRouter();
  const [data, setData] = useState({firstName : '', lastName : '', password : '', phoneNumber : '', curp : '',address : '', birthDate : ''})
  
  const handleSubmit = async (event) => {
    event.preventDefault()
      try { 
        const newData = await editUserData(props.userId, data)
        alert('Datos actualizados correctamente')
        // router.replace("/client");
      }
      catch (error) {
        console.log(error)
      }
    
  }

  const updateField = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="d-block d-md-flex mt-2">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3">Contacto:</h2>
        </div>

        <div className="col-12 col-md-9">
          <div className="d-block d-md-flex ">
            <DynamicInput
              name='firstName'
              value={data.firstName}
              type="text"
              className="mx-2 mb-3 "
              label="First name"
              classNameInput=" form-control col-12  "
              classNameContainer=""
              onChange={updateField}
            />
            <DynamicInput
              name='lastName'
              value={data.lastName}
              type="text"
              className="mx-2 mb-3 "
              label="Last name"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
              onChange={updateField}
            />
            
          </div>
          <div className="d-block d-md-flex">
          <DynamicInput
              name='phoneNumber'
              value={data.phoneNumber}
              type="text"
              className=" mx-2 mb-3 "
              label="Phone number"
              classNameInput=" form-control col-12  "
              classNameContainer=""
              onChange={updateField}
            />
            {/* <DynamicInput
              name='email'
              value={data.email}
              type="email"
              className=" mx-2 mb-3 "
              label="Email"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
              onChange={updateField}
            /> */}
            
          </div>
          
        </div>
      </div>

      <div className="d-block d-md-flex mt-4">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3">Identidad:</h2>
        </div>
        <div className="col-12 col-md-9">
          <div className="d-block d-md-flex">

          <DynamicInput
              name='birthDate'
              value={data.birthDate}
              type="date"
              className=" mx-2 mb-3 "
              label="Fecha de Nacimiento"
              classNameInput=" form-control col-12  "
              classNameContainer=""
              onChange={updateField}
            />
            <DynamicInput
              name='curp'
              value={data.curp}
              type="text"
              className=" mx-2 mb-3 "
              label="CURP"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
              onChange={updateField}
            />
            
          </div>
        </div>
      </div>

      <div className="d-block d-md-flex mt-4">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3">Direcci??n:</h2>
        </div>
        <div className="col-12 col-md-9">
        <div className="d-block d-md-flex">
          
        <DynamicInput
                      name='address'
                      value={data.address}
              type="text"
              className=" mx-2 mb-3 "
              label="Direcci??n Completa"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
              onChange={updateField}
            />
          
          
          </div>
        </div>
      </div>

      <div className="d-block d-md-flex mt-4">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3">Cambia tu contrase??a:</h2>
        </div>
        <div className="col-12 col-md-9">
          <div className="d-block d-md-flex">

          <DynamicInput
                        name='password'
                        value={data.password}
              type="password"
              className=" mx-2 mb-3 "
              label="Password"
              classNameInput=" form-control col-12  "
              classNameContainer=""
                  onChange={updateField}
              
              
            />
            <DynamicInput
              name='confirmPassword'            
              type="password"
              className=" mx-2 mb-3 "
              label="Confirm your Password"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
              onBlur ={(event) => event.target.value != data.password ? alert('Password y confirmaci??n no coinciden'): null}
            />
            
          </div>
        </div>
      </div>


      <div className="col-12 flex justify-center align">
        
        <DynamicButton
        
            className="bg-prussian rounded-lg shadow-sm my-4 "
            type="submit"
          >
            <p className="text-white m-2 ">    Actualizar datos </p>
        </DynamicButton>
      </div>
    </form>
  );
}
