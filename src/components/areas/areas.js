import React from 'react';

export default function Areas(props) {
  return (
    <div className="areas-contantsec">
    <div className="areas-sec">
        <img src={props.img} className="area-img" alt="House 1"/>
        <h3 className="areas-title">{props.title}</h3>
        <p className="area-text">{props.text}</p>
        <div className="areas-details">
            <span>{props.details}</span>
          
        </div>
    </div>
    </div>
  );
}
