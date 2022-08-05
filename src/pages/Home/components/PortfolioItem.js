import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles/PortfolioItem.scss"

const PortfolioItem = () => {
   const [animation, setAnimation] = useState(false)
   let navigate = useNavigate()

   console.log(1);

   return (
      <div className='portfolio-item' onClick={() => {navigate("./portfolio")}} onMouseEnter={() => { setAnimation(true) }} onMouseLeave={() => { setAnimation(false) }}>
         <div className="image-wrapper">
            <img className={animation ? "animation" : null} src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/6112cd9d5b27385cbcd7218d_portfolio-1-featured-image-personal-x-template.jpg" alt="todo" />
         </div>

         <div className="item-content">
            <h3 className='h3-size'>Todo List App Redesign</h3>
            <p className='paragraph'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non dolor sit consectuetur do.
            </p>

            <div className="read-case-study">
               <div>Read case study</div>
               <img className={animation ? "animation" : null} src="https://assets.website-files.com/61129bb2ecedf803564c68ec/61155e76b0500d608ffb874e_arrow-personal-x-template.svg" alt="right-arrow" />
            </div>
         </div>
      </div>
   )
}

export default PortfolioItem