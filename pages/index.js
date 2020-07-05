import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('api/get-promo', fetcher)
  
  return (
    <div>
      <PageTitle title='Seja Bem Vindo' />
      <p className='container mx-auto text-center font-bold mt-6'>
     A Palpite Box busca conectar o comércio local para atender melhor seus clientes. <br />
Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className='text-center my-12'>
        <Link href='/pesquisa'>
          <a className='bg-green-600 px-6 py-4 text-white font-bold rounded-lg shadow-lg hover: shadow'>Dar opinião ou sugestão</a>
        </Link>
      </div>
      {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon &&
        <p className='my-12 text-center mt-6'>
          {data.message}
        </p>
      }
    </div>
  )
}

export default Index
