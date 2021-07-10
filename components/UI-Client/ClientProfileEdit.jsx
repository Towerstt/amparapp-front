import DynamicInput from "../DynamicInput";
import DynamicButton from "../DynamicButton";
import { useRouter } from 'next/router'
import { useState } from "react";

export default function ClientProfileEdit() {


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phoneNumber, setPhoneNumber]= useState("");
  const [curp, setCurp]= useState('');
  const [address, setAddress]= useState('');
  const [birthDate, setBirthDate]= useState('')

  

  const router = useRouter();

  //falta agregarle el async y el fetch
  const handleSubmit =  (event) => {
    event.preventDefault();

    try {
      const newData = JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        curp,
        address,
        birthDate
        
      });
      
      
    console.log(newData)

    } catch (error) {
      console.log(error);
    }
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
              type="text"
              className="mx-2 mb-3 "
              label="First name"
              classNameInput=" form-control col-12  "
              classNameContainer=""
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <DynamicInput
              type="text"
              className="mx-2 mb-3 "
              label="Last name"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
              value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
            />
            
          </div>
          <div className="d-block d-md-flex">
          <DynamicInput
              type="text"
              className=" mx-2 mb-3 "
              label="Phone number"
              classNameInput=" form-control col-12  "
              classNameContainer=""
              value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
            />
            <DynamicInput
              type="email"
              className=" mx-2 mb-3 "
              label="Email"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
              value={email}
                  onChange={(event) => setEmail(event.target.value)}
            />
            
          </div>
          <div className="d-block d-md-flex">

          <DynamicInput
              type="password"
              className=" mx-2 mb-3 "
              label="Password"
              classNameInput=" form-control col-12  "
              classNameContainer=""
              value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
              
              
            />
            <DynamicInput
              type="password"
              className=" mx-2 mb-3 "
              label="Confirm your Password"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
              value={password}
                  onChange={(event) => setPassword(event.target.value) }
            />
            
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
              type="date"
              className=" mx-2 mb-3 "
              label="Fecha de Nacimiento"
              classNameInput=" form-control col-12  "
              classNameContainer=""
              value={birthDate}
                  onChange={(event) => setBirthDate(event.target.value)}
            />
            <DynamicInput
              type="text"
              className=" mx-2 mb-3 "
              label="CURP"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
              value={curp}
                  onChange={(event) => setCurp(event.target.value)}
            />
            
          </div>
        </div>
      </div>

      <div className="d-block d-md-flex mt-4">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3">Dirección:</h2>
        </div>
        <div className="col-12 col-md-9">
        <div className="d-block d-md-flex">
          
        <DynamicInput
              type="text"
              className=" mx-2 mb-3 "
              label="Dirección Completa"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
              value={address}
                  onChange={(event) => setAddress(event.target.value)}
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
