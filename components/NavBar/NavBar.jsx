import Icons from "../Icons";
import Link from "next/link";
import Modal from "./Modal/Modal";
import DynamicButton from "../DynamicButton";
import Image from "next/image";

export default function NavBar(props) {


  return (
    <header>
      <nav id="icona-amparapp"
        className={` 
      ${props.fixedTop ? "fixed-top" : ""} 
      ${props.bgTransparent ? "bg-transparent" : "bg-campaing"} 
      shadow-sm   navbar bg-light navbar-light p-0 `}
      >
        <div className="col-sm ">
          <Link href='/'>
            <a>
            <img
            className="d-block d-md-none mx-auto w-25"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/amparapp-icono.png"
            alt="Alza la voz logo"
            width={75}
        height={75}
          />
            </a>
          </Link>
          
          

          <div className="col-sm-2 d-none d-md-flex align-items-center flex-column ">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="p-4">
                <span>MENU</span>
              </div>
            </div>
            <nav className="navbar navbar-light">
              <button
                className="navbar-toggler d-none"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon d-none"></span>
              </button>
            </nav>
          </div>


        </div>
        <div className="d-none d-md-block col-sm">
          <a className="navbar-brand amparapp-logo ">
            <Link href="/">
              <button>
              <img
              className="mx-auto d-block w-15 "
              src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/amparapp-icono.png"
              alt=""
              width={75}
        height={75}
            />

              </button>
            
            </Link>
          </a>
        </div>
        <div className="d-none d-md-block col-sm d-md-flex align-items-center justify-content-end">
          <span className="p-3">
            <Icons source="fas fa-search" link='search'/>
          </span>
          
          <Modal/>
        </div>
      </nav>
    </header>
  );
}
