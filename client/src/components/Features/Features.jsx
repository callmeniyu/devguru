import React from 'react'
import "./Features.css"

const Features = () => {
  return (
      <div className='features'>
          <h1 className='section-header'>Features</h1>
          <ul className="features-navigate">
              <li onClick={(e)=>e.preventDefault()}><a href="#">Professional</a></li>
              <li onClick={(e)=>e.preventDefault()}><a href="#">Cost-Effective</a></li>
              <li onClick={(e)=>e.preventDefault()}><a href="#">Scalable</a></li>
              <li onClick={(e)=>e.preventDefault()}><a href="#">Secure</a></li>
              <li onClick={(e)=>e.preventDefault()}><a href="#">Time-Bound</a></li>
              <li onClick={(e)=>e.preventDefault()}><a href="#">Innovative</a></li>
          </ul>
          <hr />
          <div className="features-main">
              <div className="features-main-left">
                  <div className="features-main-left-description"></div>
                  <div className="features-main-left-points"></div>
              </div>
              <div className="features-main-right">
                  <img src="" alt="features-main-right-img" />
              </div>
          </div>
    </div>
  )
}

export default Features