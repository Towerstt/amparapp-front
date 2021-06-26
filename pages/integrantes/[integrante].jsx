
import { useRouter } from 'next/router'

export default function Integrante (props) {
  const router  = useRouter()

  return (
    <p>
      <p>
        integrante: {router.query.integrante || 'no viene'}
        name: { props.caseName }
      </p>
    </p>
  )
}

export function getServerSideProps (ctx) {
  console.log('Hola get server side props')
  const integrante = ctx.params.integrante


  return {
    props: {
      messsage: 'adios',
      integrante
    }
  }
}
