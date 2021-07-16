import Image from "next/image";

export default function NotFound (){
    return (
        <div>
            <img className="d-block mx-auto w-100" src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/ups404.png" alt="" />
            <h1 className="text-center">Parece que estas perdido</h1>
            <h2 className="text-center">Es momento de regresar</h2>

            <img className="d-block mx-auto w-100" src="https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/logo-slogan-icon.png" alt="" />
            

        </div>
        
    )
}