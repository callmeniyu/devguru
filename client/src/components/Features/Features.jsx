import React, { useEffect, useState } from 'react'
// import feature_img1 from "../../assets/svg/office-work-28.svg"
import ListElement from "../Listelement/Listelement"
import { features } from "../../utils/data"
import "./Features.css"

const Features = () => {
    const [title, setTitle] = useState("Proffesional")
    const handleTitle = (e) => {
        e.preventDefault()
        setTitle(e.target.name)
    }
    const currentFeature = features.find((feature) => feature.title == title)
    useEffect(() => {
        console.log(currentFeature)
    })
  return (
      <div className='features'>
          <h1 className='section-header'>Features</h1>
          <ul className="features-navigate">
              <li><a href="#" onClick={(e)=>handleTitle(e)} name="Proffesional">Professional</a></li>
              <li><a href="#" onClick={(e)=>handleTitle(e)} name="Cost-Effective">Cost-Effective</a></li>
              <li><a href="#" onClick={(e)=>handleTitle(e)} name="Scalable">Scalable</a></li>
              <li><a href="#" onClick={(e)=>handleTitle(e)} name="Secure">Secure</a></li>
              <li><a href="#" onClick={(e)=>handleTitle(e)} name="Time-Bound">Time-Bound</a></li>
              <li><a href="#" onClick={(e)=>handleTitle(e)} name="Innovative">Innovative</a></li>
          </ul>
          <hr />
          <div className="features-main">
              <div className="features-main-left">
                  <div className="features-main-left-description">
                      <h3>{ currentFeature.title}</h3>
                      <p>{ currentFeature.description}</p></div>
                  <div className="list-elements-div">
                  <ListElement text={currentFeature.points[0]} />
                  <ListElement text={currentFeature.points[1]} />
                  <ListElement text={currentFeature.points[2]} />
                  <ListElement text={currentFeature.points[3]} />
                  </div>
              </div>
              <div className="features-main-right">
                  <img src={ currentFeature.img} className='feature-img' alt="features-main-right-img" />
              </div>
          </div>
    </div>
  )
}

export default Features