
export default function DynamicInput(props){

  const {className:style, onClick, type, placeholder, id} = props
  return(
     <input id={id} className={style} onClick={onClick} type={type} placeholder={placeholder}/>
  )
}

