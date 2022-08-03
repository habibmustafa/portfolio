import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.scss"

const Button = ({ to, title }) => {
   return (
      <NavLink className='get' to={to}>{title}</NavLink>
   )
}

export default Button