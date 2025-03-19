import React from 'react'

export default function Start(props) {
  return (
    <div className="startup-sec">
    <div className="left-side">
      <div className="startup-content">
      
        <h2 className="startup-head">{props.title} </h2>
    
    
        
      </div>
      
      </div>
    
    <div className="right-side">
    <p className="startup-text">{props.text} </p>
    <button className="startup-btn">{props.btn}</button>
    </div>
    
    
    
    </div>
  )
}
