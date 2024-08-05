import React, { useEffect, useState } from "react"
import Listelement from "../Listelement/Listelement"
import { services } from "../../utils/data"
import { motion } from "framer-motion"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import "./OurServices.css"
import { duration } from "@mui/material"

const Ourservices = () => {
    const [title, setTitle] = useState("Web Development")
    const handleTitle = (e) => {
        console.log("click")
        e.preventDefault()
        setTitle(e.target.name)
    }
    const currentService = services.find((service) => service.title == title)

    const rightVariants = {
        initial: {
            x: -60,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 150, damping: 20, duration: 3 },
        },
        exit: {
            x: 200,
            opacity: 0,
        },
    }

    const imgVariant = {
        initial: {
            x: -50,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 150, damping: 20, duration: 1, delay: 0.2 }, // Add a delay of 2 seconds
        },
        exit: {
            x: 200,
            opacity: 0,
        },
    }

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
                            Web Development <KeyboardArrowRightIcon className="right-arrow" />
                        </a>
                    </li>
                    <li className="services-item">
                        <a href="#" onClick={(e) => handleTitle(e)} name="Frontent Development">
                            Frontent Development <KeyboardArrowRightIcon className="right-arrow" />
                        </a>
                    </li>
                    <li className="services-item">
                        <a href="#" name="UI/UX Design (using Figma)" onClick={(e) => handleTitle(e)}>
                            UI/UX Design (using Figma) <KeyboardArrowRightIcon className="right-arrow" />
                        </a>
                    </li>
                    <li className="services-item">
                        <a href="#" name="Mobile App Development" onClick={(e) => handleTitle(e)}>
                            Mobile App Development <KeyboardArrowRightIcon className="right-arrow" />
                        </a>
                    </li>
                    <li className="services-item">
                        <a href="#" name="SaaS Sevices" onClick={(e) => handleTitle(e)}>
                            SaaS Sevices <KeyboardArrowRightIcon className="right-arrow" />
                        </a>
                    </li>
                    <li className="services-item">
                        <a href="#" name="Backend Development" onClick={(e) => handleTitle(e)}>
                            Backend Development <KeyboardArrowRightIcon className="right-arrow" />
                        </a>
                    </li>
                </ul>
                <motion.div
                    className="services-right"
                    variants={rightVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={currentService.id}
                >
                    <div className="services-right-details">
                        <p className="services-right-description">
                            <h3> {currentService.title}</h3>
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
                        <motion.img
                            className="service-img"
                            src={currentService.img}
                            variants={imgVariant}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            key={currentService.id}
                            alt="services-right-img"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Ourservices
