import Image from "next/image";
export default function Infographies(props){
  const {className: style, src, alt, number, text} = props

  return(

    <div className="col-sm-4 d-flex justify-content-center align-items-center card-info">
            
              <Image
                className={style}
                src={src}
                alt={alt}
              />
            

            <div>
              <span>{number}</span>
              <p>{text}</p>
            </div>
          </div>
  )
}
