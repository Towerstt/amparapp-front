import Icons from "../Icons";
import Link from "next/link";
import HambMenu from "./HambMenu/HambMenu";

export default function NavBarLoggeado(props) {
  return (
    <header className=" ">
      <nav
        className={` 
      ${props.fixedTop ? "fixed-top" : ""} 
      ${props.bgTransparent ? "bg-transparent" : "bg-campaing"} 
      shadow-sm   navbar bg-light navbar-light p-0 `}
      >
        <div className="col-sm ">
          <Link href={`/${props.rutalink}`}>
            <a>
              <img
                className="d-block d-md-none mx-auto w-25"
                src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/amparapp-icono.png"
                alt="Alza la voz logo"
              />
            </a>
          </Link>

          <div className="col-sm-2 d-none d-md-flex align-items-center flex-column  ">
            <HambMenu
              pagos={props.pagos}
              editar={props.editar}
              casos={props.casos}
              acerca={props.acerca}
              aviso={props.aviso}
              politicas={props.politicas}
            />
          </div>
        </div>

        <div className="d-none d-md-block col-sm">
          <a className="navbar-brand amparapp-logo ">
            <Link href={`/${props.rutalink}`}>
              <button>
                <img
                  className="mx-auto d-block w-15 "
                  src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/amparapp-icono.png"
                  alt=""
                />
              </button>
            </Link>
          </a>
        </div>
        <div className="d-none d-md-block col-sm d-md-flex align-items-center justify-content-end">
          <span className={`p-3 ${props.searchDisplay && "d-none"}`}>
            <Icons source="fas fa-search" link={`/${props.rutaSearch}`} />
          </span>
          <span className="p-3">
            <span className="p-3">
              <button type="button">
                <i className="fas fa-user"></i>
              </button>
            </span>
          </span>
        </div>
      </nav>
    </header>
  );
}
