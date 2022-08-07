import React from 'react'
import "./style.scss"
import { useNavigate } from 'react-router-dom'

const Logo = () => {
   let navigate = useNavigate()
   return (
      <div className="logo" onClick={() => { navigate('/') }}>
         <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/612a715b08e8df7a8419c063_logo-you-x-webflow-template.svg" alt="logo" />
      </div>
   )
}

export default Logo