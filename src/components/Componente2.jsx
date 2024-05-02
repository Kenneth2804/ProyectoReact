import React from 'react'
import { Link } from 'react-router-dom'

export default function Componente2() {
  return (
    <div>
      Hola soy el componente 2s
      <Link to={"/"}>
      <button>
       Regresar 
      </button>
      </Link>
    </div>
  )
}
