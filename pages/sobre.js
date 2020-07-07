import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div className='flex mb-4 container mx-auto'>
      <PageTitle title='Sobre' />
      <div className='container mx-auto'>

        <p class='mt-2 text-center container px-4 border-teal-400 border-2 w-auto h- text-base italic p-8'>A Aplicação PalpiteBox faz parte de um projeto OpenSource da Startup TwoDevs uma Startup de duas pessoas apaixonadas por Resolver Problemas. E pensando nisso
    um dos nossos programadores <strong>(Dieferson Soares)</strong> criou esse projeto com o foco em comércios locais visto que, muitas empresas oferecem descontos aos seus clientes mas sem um controle sobre o mesmo.
    Então surgiu a ideia de criar o site com único intuito de conectar os clientes de uma forma rápida e prática. Bastando preencher um pequeno formulário e com isso é gerado um cupom de desconto.
        </p>
      </div>
    </div>

  )
}

export default Sobre
