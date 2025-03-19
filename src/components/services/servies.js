import React from 'react'

export default function Servies(props) {
  return (
    <div className="servies-sec">
<div className="servies-contentsec">
<div className="serivesimage-sec">
  <img src={props.img}  alt="Description"/>
</div>
  <div className="servies-contenttext">
  
    <h2 className="serviex-head">{props.title} </h2>
    <p className="servies-text">{props.text} </p>

    
  </div>
  
  </div>

</div>
  )
}
