import { Fragment } from "react";
import DynamicInput from "../../DynamicInput";
import ClientsInfo from "./ClientsInfo";

export default function CaseDetailsInputs(props) {
  return (
    <Fragment>
      <div className="grid grid-cols-6 mt-3">
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center mt-2">
          <p className="font-black  text-2xl   ">Imagen del caso:</p>
        </div>

        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <DynamicInput
            type="file"
            className="  "
            classNameInput=" form-control  rounded-lg"
            classNameContainer=""
          />
        </div>
      </div>

      <div className="grid grid-cols-6 mt-3">
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center mt-2">
          <p className="font-black  text-2xl   ">Descripción del caso:</p>
        </div>

        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <DynamicInput
            type="text"
            className="  "
            label="Título del caso"
            classNameInput=" form-control  rounded-lg"
            classNameContainer=""
          />
        </div>
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center"></div>

        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <DynamicInput
            type="text"
            className="  "
            label="Slogan del caso"
            classNameInput=" form-control  rounded-lg"
            classNameContainer=""
          />
        </div>
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center"></div>
        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Descripción Corta"
          ></textarea>
        </div>
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center"></div>
        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="6"
            placeholder="Descripción Larga"
          ></textarea>
        </div>
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center"></div>

        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Efectos de la sentencia"
          ></textarea>
        </div>
      </div>

      <div className="grid grid-cols-6 mt-3 ">
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center mt-2">
          <p className="font-black  text-2xl   ">Fecha límite para firma:</p>
        </div>

        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12 ">
          <DynamicInput
            type="date"
            className="  "
            classNameInput=" form-control  rounded-lg w-1/2"
            classNameContainer=""
          />
        </div>
      </div>

      <div className="grid grid-cols-6 mt-3">
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center mt-2">
          <p className="font-black  text-2xl   ">Costo de acceso:</p>
        </div>

        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <DynamicInput
            type="number"
            className="  "
            classNameInput=" form-control  rounded-lg w-1/2"
            classNameContainer=""
            label="$$"
          />
        </div>
      </div>

      <div className="grid grid-cols-6 mt-3">
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center mt-2">
          <p className="font-black  text-2xl   ">Demanda de Amparo:</p>
        </div>

        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <DynamicInput
            type="file"
            className="  "
            classNameInput=" form-control  rounded-lg"
            classNameContainer=""
          />
        </div>
      </div>

      <div className="grid grid-cols-6 mt-3">
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center mt-2">
          <p className="font-black  text-2xl   ">Representación Legal:</p>
        </div>

        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <DynamicInput
            type="file"
            className="  "
            classNameInput=" form-control  rounded-lg"
            classNameContainer=""
          />
        </div>
      </div>

      <div className="grid grid-cols-6 mt-3">
        <ClientsInfo/>
      </div>

    </Fragment>
  );
}
