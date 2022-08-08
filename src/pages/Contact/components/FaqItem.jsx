import React, { useState } from 'react'
import "./styles/FaqItem.scss"

const FaqItem = ({ title, content, i }) => {
   const [selected, setSelected] = useState(null)

   const toggle = i => {
      if (selected === i) {
         return setSelected(null)
      }

      setSelected(i)
   }

   return (
      <div className="faq-item" onClick={() => { toggle(i) }}>
         <div className={`icon ${selected === i && 'active'}`}>
            <span></span>
            <span></span>
         </div>
         <div className="faq-item-content">
            <h3 className='h3-size'>{title}</h3>
            <p className={`paragraph content ${selected === i && 'show'}`}>{content}</p>
         </div>
      </div>
   )
}

export default FaqItem