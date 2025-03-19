import React from 'react'


export default function Main(props) {

    return (

<div className="main-sec">
<div className="main-contentsec">
  <div className="main-content">
  
    <h2 className="main-head">{props.title} </h2>
    <p className="main-text">{props.text} </p>

    
  </div>
  
  </div>

<div className="mainimage-sec">
  <img src={props.img}  alt="Description"/>
</div>



</div>
    
  )
}
