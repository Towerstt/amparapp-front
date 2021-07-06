import Link from 'next/link'

export default function NavBarTest (props){

    const hidden = props.hidden ? 'hidden' : 'block';
    const bgWhite = props.bgWhite ? 'bg-white': 'bg-transparent'

  return (
    <nav className={`container mx-auto h-14  border ${bgWhite}`}>
      <div className="grid grid-cols-6 h-full">
        <div className="col-span-2 border ">LOGO</div>
        <div className="col-span-2 border">b</div>
        <div className={`col-span-2 border ${hidden}`}>
          <Link href="/glosario">Glosario</Link>
          <Link href="/contactanos">Contáctanos</Link>
          <button>Iniciar sesión</button>
        </div>

      </div>
      
    </nav>
  )
}