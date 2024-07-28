import React, { useEffect, useState } from "react"
import Listelement from "../Listelement/Listelement"
import { services } from "../../utils/data"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./OurServices.css"
import service_img_webdevelopment from "../../assets/images/service_img_webdevelopment.png"

const Ourservices = () => {
    const [title, setTitle] = useState("Web Development")
    const handleTitle = (e) => {
        console.log("click")
        e.preventDefault()
        setTitle(e.target.name)
    }
    const currentService = services.find((service) => service.title == title)

    useEffect(() => {
        console.log(title)
    })
    return (
        <div className="services">
            <h3 className="section-header">Services</h3>
            <div className="services-main">
                    <ul className="services-left">
                        <li className="services-item">
                            <a href="#" onClick={(e) => handleTitle(e)} name="Web Development">
                                Web Development <KeyboardArrowRightIcon className="right-arrow"/>
                            </a>
                        </li>
                        <li className="services-item">
                        <a href="#" onClick={(e) => handleTitle(e)} name="Web Design">
                                Web Design <KeyboardArrowRightIcon className="right-arrow"/>
                            </a>
                        </li>
                        <li className="services-item">
                            <a href="#" name="UI/UX Design (using Figma)" onClick={(e)=>handleTitle(e)}>
                                UI/UX Design (using Figma) <KeyboardArrowRightIcon className="right-arrow"/>
                            </a>
                        </li>
                        <li className="services-item">
                            <a href="#" name="Mobile App Development" onClick={(e)=>handleTitle(e)}>
                                Mobile App Development <KeyboardArrowRightIcon className="right-arrow"/>
                            </a>
                        </li>
                        <li className="services-item">
                            <a href="#" name="Digital Poster Creation" onClick={(e)=>handleTitle(e)}>
                                Digital Poster Creation <KeyboardArrowRightIcon className="right-arrow"/>
                            </a>
                        </li>
                        <li className="services-item">
                            <a href="#" name="Video Production and Editing" onClick={(e)=>handleTitle(e)}>
                                Video Production and Editing <KeyboardArrowRightIcon className="right-arrow"/>
                            </a>
                        </li>
                    </ul>
                <div className="services-right">
                    <div className="services-right-details">
                        <p className="services-right-description">
                        <h3> { currentService.title }</h3>
                            {currentService.description}
                        </p>
                        <div className="list-elements-div">
                            <Listelement text={currentService.points[0]} />
                            <Listelement text={currentService.points[1]} />
                            <Listelement text={currentService.points[2]} />
                            <Listelement text={currentService.points[3]} />

                        </div>
                    </div>
                    <div className="services-right-img">
                        <img src={currentService.img} alt="services-right-img"  className="service-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourservices
