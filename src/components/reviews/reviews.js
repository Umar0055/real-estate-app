import React from 'react'

export default function Reviews(props) {
  return (
    <div className="reviews-sec">
   
      <div className="reviews-content">
      
        <h2 className="reviews-head">{props.title} </h2>
        <p className="reviews-text">{props.text} </p>
    
        
      </div>
      
   
     
    <div className='name-sec'>
    <div className='name-sec2'>
    <h1 className="reviews-name">{props.name} </h1>
    <p className="reviews-username">{props.username} </p>
    </div>
    <div className="btn-sec">

   
    <button className="left-btn">{props.btnleft}</button>
   
    <button className="right-btn">{props.btnright}</button>
    </div>
    
    
    
    </div>
    </div>
  )
}
