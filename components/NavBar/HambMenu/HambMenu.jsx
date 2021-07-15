import React, { useState } from "react";
import Menu from "./Menu";

export default function HambMenu(props) {
  console.log("hambmenu", props)
  const [open, setOpen] = useState("close");
  const [width, setWidth] = useState("w-0");
  const [display, setDisplay]= useState('d-none')

  function toggle() {
    const isOpen = open === "close" ? "open" : "close";
    const isDisplay = display === 'd-none'? 'd-block': 'd-none'

    const isWidth = width === "w-0" ? "w-2/5 xl:w-1/4 " : "w-0";
    setOpen(isOpen);

    setWidth(isWidth);
    setDisplay(isDisplay)
  }

  return (
    <React.Fragment>
      <div className={`${open} hamburger`} onClick={toggle}>
        <span className={`${open} hamburger__top-bun`}></span>
        <span className={`${open} hamburger__bottom-bun`}></span>
      </div>

      <div className={`sidePanel ${width}`}>
        <div className={`grid grid-cols-1  `}>
          
          <div className="col-span-1 flex justify-end w-full">
            <div className={`${open} hamburger`} onClick={toggle}>
              <span className={`${open} hamburger__top-bun`}></span>
              <span className={`${open} hamburger__bottom-bun`}></span>
            </div>
          </div>

            <div className= {`menu-logged grid grid-cols-1 mt-8 ${display}`}>
              <Menu
              user={props.user}
              pagos={props.pagos}
              editar={props.editar}
              casos={props.casos}
              acerca={props.acerca}
              aviso={props.aviso}
              politicas={props.politicas}
              />
            </div>
          
        </div>
      </div>
    </React.Fragment>
  );
}
