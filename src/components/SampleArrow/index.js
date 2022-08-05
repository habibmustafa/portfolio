import React from 'react'
import "./style.scss"
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

export function SamplePrevArrow({ onClick }) {
   return (
      <div onClick={onClick} className='prev-arrow' tabIndex={10}><MdArrowBackIos className="icon" /></div>
   );
}

export function SampleNextArrow({ onClick }) {
   return (
      <div onClick={onClick} className='next-arrow'><MdArrowForwardIos className="icon" /></div>
   );
}