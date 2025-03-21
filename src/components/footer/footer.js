import React from 'react'

export default function Footer(props) {
  return (
    <footer className="footer">
            
            
            <div className="footer-section-dub">
                <h1 className="footer-links-title">{props.title}</h1>
                
                   
                    <ul>
                      <li className="links">{props.link1}</li>
                      <li className="links">{props.link2}</li>
                      <li className="links">{props.link3}</li>
                    </ul>

                </div>
              
             
                 
           
            </footer>
       
  )
}
