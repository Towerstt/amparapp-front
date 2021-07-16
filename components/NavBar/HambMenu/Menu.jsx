import { Fragment } from "react";
import MenuList from "./MenuList";
import DynamicButton from "../../DynamicButton";


export default function Menu(props) {
  console.log("Menu", props)
  return (
    <Fragment>
      <div className="card   border-0 menu-logged">
        <img
          className="mx-auto d-block w-25"
          src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/amparapp-icono.png"
          alt=""
        />

        <div className="flex justify-center items-center mt-3 pr-3">
          <img
            className="d-block w-25"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-perfil.png"
            alt=""
          />
          <span>Perfil</span>
        </div>

        <MenuList
          classNameI="fas fa-credit-card mr-2"
          text="Pagos"
          link={`${props.pagos}`}
          classNameButton="w-28"
        />
        <MenuList
          classNameI="fas fa-user-alt mr-2"
          text="Editar Perfil"
          link={`${props.editar}`}
          classNameButton=""
        />

        <div className="flex justify-center items-center mt-2">
          <img
            className="d-block w-25"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-casos.png"
            alt=""
          />
          <span>Casos</span>
        </div>

        <MenuList
          classNameI="fas fa-folder mr-2"
          text="Mis Casos"
          link={`${props.casos}`}
          classNameButton="w-28"
        />
      
      </div>
    </Fragment>
  );
}
