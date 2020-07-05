import react from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div>
      <PageTitle title='Sobre' />
      <h1>Contato</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </div>
  )
}
export default Contato
