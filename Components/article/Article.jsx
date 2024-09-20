import React from 'react'
import './article.css'
const article = ({imgURL , date , text}) => {
  return (
    <div className='arcticle_of_blog'>
      <div className='image'><img src={imgURL}/></div>
      <div className='content_container'>
        <div>        
         <p>{date}</p>
         <h1>{text}</h1>
         </div>
         <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default article
