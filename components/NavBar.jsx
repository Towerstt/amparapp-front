import Icons from "./Icons";

export default function NavBar(props) {
  return (
    <header>
      <nav
        className={` 
      ${props.fixedTop ? "fixed-top" : ""} 
      ${props.bgTransparent ? "bg-transparent" : "bg-campaing"} 
      shadow-sm   navbar navbar-light p-0 `}
      >
        <div className="col-sm ">
          <img
            className="d-block d-md-none mx-auto w-25"
            src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/amparapp-icono.png"
            alt="Alza la voz logo"
          />
          <div className="col-sm-2 d-none d-md-flex align-items-center flex-column">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="p-4">
                <span>MENU</span>
              </div>
            </div>
            <nav className="navbar navbar-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </nav>
          </div>
        </div>
        <div className="d-none d-md-block col-sm">
          <a className="navbar-brand amparapp-logo">
            <img
              className="mx-auto d-block w-15"
              src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/amparapp-icono.png"
              alt=""
            />
          </a>
        </div>
        <div className="d-none d-md-block col-sm d-md-flex align-items-center justify-content-end">
          <span className="p-3">
            <Icons source="fas fa-search" />
          </span>
          <span className="p-3">
            <Icons source="fas fa-user" />
          </span>
        </div>
      </nav>
    </header>
  );
}
