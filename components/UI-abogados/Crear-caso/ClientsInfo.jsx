import { Fragment, useState } from "react";
import DynamicInput from "../../DynamicInput";
import DynamicButton from "../../DynamicButton";

export default function ClientsInfo(props) {
  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
    console.log(fields);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <Fragment>
      <div className="col-span-6 place-self-center my-3">
        <h4 className="text-2xl "> -Información de los Clientes-</h4>
      </div>

      <div className="col-span-6  md:col-span-3 mt-2 md:border-r-2 border-honeyyellow mr-2">
        <p className="font-black  text-2xl mb-3  ">
          Información desde la base de datos del Cliente:
        </p>
        <p>
          <i className="fas fa-check mr-2"></i>Nombre completo
        </p>
        <p>
          <i className="fas fa-check mr-2"></i>Correo electrónico
        </p>
        <p>
          <i className="fas fa-check mr-2"></i>Número telefónico
        </p>
        <p>
          <i className="fas fa-check mr-2"></i>CURP
        </p>
        <p>
          <i className="fas fa-check mr-2"></i>Domicilio
        </p>
        <p>
          <i className="fas fa-check mr-2"></i>Todos son mayores de edad
        </p>
      </div>

      <div className="col-span-6  md:col-span-3 mt-2 md:pl-2">
        <p className="font-black  text-2xl mb-3  ">Información extra:</p>

        {fields.map((field, idx) => {
          return (
            <p key={`${field}-${idx}`}>
              <i className="fas fa-info mr-2"></i>
              {field.value}
            </p>
          );
        })}
      </div>

      <div className="col-span-6 my-3">
        <h4 className="text-2xl text-center">
          -Añade todos los campos de información extra que requieras de los
          clientes-
        </h4>
      </div>

      <div className="col-span-6 my-3  flex justify-center ">
        <button className="" type="button" onClick={() => handleAdd()}>
          <i className="far fa-plus-square  "></i>
        </button>
      </div>

      {fields.map((field, idx) => {
        return (
          <Fragment key={idx}>
            <div key={`${field}-${idx}`} className="col-span-5 my-3 pl-4 ">
              <DynamicInput
                type="text"
                className="  "
                label="campo extra"
                classNameInput=" form-control  rounded-lg w-full "
                classNameContainer=""
                value={field.value || ""}
                onChange={(e) => handleChange(idx, e)}
              />
            </div>
            <div key={`${idx}`} className="col-span-1 my-3 flex justify-center">
              <button type="button" onClick={() => handleRemove(idx)}>
                <i className="fas fa-times-circle  "></i>
              </button>
            </div>
          </Fragment>
        );
      })}

      <div className="col-span-6 my-3 flex justify-center">
        <DynamicButton
          className="bg-prussian rounded-lg shadow-sm my-4 "
          type="submit"
        >
          <p className="text-white mx-4 my-2 "> Crear caso </p>
        </DynamicButton>
      </div>
    </Fragment>
  );
}
