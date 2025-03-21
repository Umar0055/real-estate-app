import React from 'react';

export default function Areas(props) {
  return (
    <li>
    <div className="card">
      <img src={props.img} className="card-img-top" alt="Card image" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  </li>
  );
}
