import React from 'react'

const Footer = () => {
  return (
    <div className='bg-green-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
      Projeto desenvolvido por: Dieferson Soares  <a className='hover:underline' 
      href='https://github.com/frontendDieferson/'>/ Github </a>
        <div className='mt-4'>
          <img className='inline' src='/happyCode.png' width='150' height='90' />
        </div>
      </div>
    </div>
  )
}

export default Footer
