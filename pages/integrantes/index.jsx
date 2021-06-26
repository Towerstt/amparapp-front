
import Link from 'next/link'

export default function Index () {
  return (
    <div>
      <p>
        Esta es la pagina de rodri
      </p>
      <ul>
        <li>
          {/* <a href="/integrantes/rodri"> Rodri </a> */}
          <Link href='/integrantes/rodri' > Rodri </Link>
        </li>
      </ul>
    </div>
  )
}

