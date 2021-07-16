
export default function Infographies(props){
  const {className: style, src, alt, number, text} = props

  return(

    <div className="col-sm-4 flex justify-center items-center card-info">
            <img
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
