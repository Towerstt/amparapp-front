import DynamicButton from "../DynamicButton";

export default function DashboardEstructure(props) {
  return (
    <section className="container-fluid  bg-light p-5 dashboard mt-20  md:mt-14 xl:mt-20" >
      <div className="row d-block p-0 p-mb-5">
        <img
          className="d-block mx-auto md:w-8/12 xl:w-1/2"
          src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/dashboard.png"
          alt=""
        />
        <p className="text-center welcome mb-14">{props.text} </p>

        <div className="d-block d-md-flex align-items-center justify-content-md-center">
          <DynamicButton
          data={props.data}
          className="mx-2 d-flex align-items-center px-3 shadow-sm"
          link={props.linkPerfil}
          >
            <img
              src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-perfil.png"
              alt=""
            />
            <span>Perfil</span>
          </DynamicButton>
          <DynamicButton 
          
          className="mx-2 d-flex align-items-center px-3 shadow-sm"
          link={props.linkCasos}
          >
            <img
              src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/icon-casos.png"
              alt=""
            />
            <span>Casos</span>
          </DynamicButton>
        </div>
      </div>
    </section>
  );
}
