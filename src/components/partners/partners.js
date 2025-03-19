import React from 'react'

export default function Partners(props) {
  return (
    <li className="partners-item">
    <a href="#">
        <img src={props.logo} alt="partners logo" />
    </a>
</li>
  )
}

