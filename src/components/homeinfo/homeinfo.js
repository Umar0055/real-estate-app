import React from 'react'

export default function Homeinfo(props) {
  return (
    

    <div className="homeinfo-sec">
      <div className="homeimage-sec">
        <img src={props.img} alt="Description"/>
      </div>
      <div className="homeimage-sec">
        <img src={props.pic}  alt="Description"/>
      </div>


      <div className="home-contentsec">
        <div className="home-content">
        
          <h2 className="home-head">{props.title} </h2>
          <p className="home-text">{props.text} </p>

          <button className="home-btn">{props.btn}</button>
        </div>
        
        </div>

      </div>
    

 
 
  )
}
