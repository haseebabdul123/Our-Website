import React from 'react'
import "./Title.css"
const Title = ({subTitle , title}) => {
  return (
    <div className='title'>
        <p>{title}</p>
        <h2>{subTitle}</h2>
        <div className="line"></div>
    </div>
  )
}

export default Title