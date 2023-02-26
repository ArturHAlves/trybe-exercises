import React from 'react'

export default function Button( { buttonName } ) {

  // Lógica
  const handleClick = () => {
    console.log('Clicou')
  }

  // Interface
  return (
    <button type='button' onClick={ handleClick }>{buttonName}</button>
  )
}
