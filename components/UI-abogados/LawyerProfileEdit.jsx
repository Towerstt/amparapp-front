import DynamicInput from "../DynamicInput";
import DynamicButton from "../DynamicButton";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LawyerProfileEdit() {
  


  

  return (
    <form >
      <div className="d-block d-md-flex mt-2">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3 ">Contacto:</h2>
        </div>

        <div className="col-12 col-md-9">
          <div className="d-block d-md-flex ">
            <DynamicInput
              type="text"
              className="mx-2 mb-3 "
              label="First name"
              classNameInput=" form-control col-12  "
              classNameContainer=""
              
            />
            <DynamicInput
              type="text"
              className="mx-2 mb-3 "
              label="Last name"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
              
            />
          </div>

          <div className="d-block d-md-flex">
            <DynamicInput
              type="text"
              className=" mx-2 mb-3 "
              label="Phone number"
              classNameInput=" form-control col-12  "
              classNameContainer=""
              
            />
            <DynamicInput
              type="email"
              className=" mx-2 mb-3 "
              label="Email"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
             
            />
          </div>
        </div>
      </div>

      <div className="d-block d-md-flex mt-4">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3 ">Imagen de perfil:</h2>
        </div>
        <div className="col-12 col-md-9">
          <div className="d-block d-md-flex">
            <DynamicInput
              type="file"
              className=" mx-2 mb-3 "
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
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
              type="text"
              className=" mx-2 mb-3 "
              label="Cedula profesional"
              classNameInput=" form-control col-12  "
              classNameContainer=""
            />
            <DynamicInput
              type="text"
              className=" mx-2 mb-3 "
              label="LinkedIn"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
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
              
            />
          </div>
        </div>
      </div>

      <div className="d-block d-md-flex mt-4">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3">Lugar de trabajo:</h2>
        </div>
        <div className="col-12 col-md-9">
          <div className="d-block d-md-flex">
            <DynamicInput
              type="text"
              className=" mx-2 mb-3 "
              label=" ONG que representas"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
            />

            <DynamicInput
              type="text"
              className=" mx-2 mb-3 "
              label="Sitio web de la compañía"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
            />
          </div>
        </div>
      </div>

      <div className="d-block d-md-flex mt-4">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3">Cuéntanos de ti:</h2>
        </div>
        <div className="col-12 col-md-9">
          <div className="d-block d-md-flex ">
            <div className="mx-2 mb-3 w-full">
              <textarea className="col-12 " placeholder="Cuéntanos"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="d-block d-md-flex mt-4">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3">Cambia tu contraseña:</h2>
        </div>
        <div className="col-12 col-md-9">
          <div className="d-block d-md-flex">
            <DynamicInput
              type="password"
              className=" mx-2 mb-3 "
              label="Password"
              classNameInput=" form-control col-12  "
              classNameContainer=""
              
            />
            <DynamicInput
              type="password"
              className=" mx-2 mb-3 "
              label="Confirm your Password"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
              
            />
          </div>
        </div>
      </div>

      <div className="col-12 flex justify-center align my-3">
        <DynamicButton
          className="bg-prussian rounded-lg shadow-sm my-4 "
          type="submit"
        >
          <p className="text-white m-2 "> Actualizar datos </p>
        </DynamicButton>
      </div>
    </form>
  );
}
