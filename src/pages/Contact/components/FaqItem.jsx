import React, { useState } from 'react'
import "./styles/FaqItem.scss"

const FaqItem = ({ item, i }) => {
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
            <h3 className='h3-size'>{item.title}</h3>
            <p className={`paragraph content ${selected === i && 'show'}`}>{item.content}</p>
         </div>
      </div>
   )
}

export default FaqItem