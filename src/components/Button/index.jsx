import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

const Button = ({ to, title }) => {
   return (
      <Link className='get' to={to}>{title}</Link>
   )
}

export default Button