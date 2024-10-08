import React, { useEffect, useState } from "react"
import ListElement from "../Listelement/Listelement"
import { features } from "../../utils/data"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "react-responsive"
import "./Features.css"


const Features = () => {
    const [title, setTitle] = useState("Proffesional")
    const handleTitle = (e) => {
        e.preventDefault()
        setTitle(e.target.name)
    }
    const isSmallScreen = useMediaQuery({ maxWidth: 600 })

    const currentFeature = features.find((feature) => feature.title == title)

    useEffect(() => {
        const preloadImages = (srcArray) => {
            srcArray.forEach((src) => {
                const img = new Image();
                img.src = src;
            });
        };
        preloadImages(features.map((feature) => feature.img));
    }, []);


    const variants = {
        initial: {
            opacity: 1,
        },
        animate: {
            x: 0,
            transition: {
                opacity: { type: "spring", stiffness: 300, damping: 20, duration: 5 },
            },
        },
        exit: {
            opacity: 0,
        },
    }

    const h1Variant = {
        small: {
            y: [-50, 0],
            opacity: [0, 1],
            transition: { duration: 0.5, delay: 0.1, stiffness: 20, type: "spring" },
        },
        large: {
            x: [-50, 0],
            opacity: [0, 1],
            transition: { duration: 0.5, delay: 0.1, stiffness: 20, type: "spring" },
        },
    }
    const pVariant = {
        small: {
            y: [-50, 0],
            opacity: [0, 1],
            transition: { duration: 0.5, delay: 0.2, stiffness: 20, type: "spring" },
        },
        large: {
            x: [-50, 0],
            opacity: [0, 1],
            transition: { duration: 0.5, delay: 0.2, stiffness: 20, type: "spring" },
        },
    }
    const pointsVariant = {
        small: {
            y: [-50, 0],
            opacity: [0, 1],
            transition: { duration: 0.5, delay: 0.3, stiffness: 20, type: "spring" },
        },
        large: {
            x: [-50, 0],
            opacity: [0, 1],
            transition: { duration: 0.5, delay: 0.3, stiffness: 20, type: "spring" },
        },
    }

    const getVariant = () => {
        if (isSmallScreen) return "small"
        return "large"
    }
    return (
        <div className="features">
            <h1 className="section-header">Features</h1>
            <ul className="features-navigate">
                <li className={`${title == "Proffesional" ? "feature-nav-active" : ""}`}>
                    <a href="#" onClick={(e) => handleTitle(e)} name="Proffesional">
                        Professional
                    </a>
                </li>
                <li className={`${title == "Cost-Effective" ? "feature-nav-active" : ""}`}>
                    <a href="#" onClick={(e) => handleTitle(e)} name="Cost-Effective">
                        Cost-Effective
                    </a>
                </li>
                <li className={`${title == "Scalable" ? "feature-nav-active" : ""}`}>
                    <a href="#" onClick={(e) => handleTitle(e)} name="Scalable">
                        Scalable
                    </a>
                </li>
                <li className={`${title == "Secure" ? "feature-nav-active" : ""}`}>
                    <a href="#" onClick={(e) => handleTitle(e)} name="Secure">
                        Secure
                    </a>
                </li>
                <li className={`${title == "Time-Bound" ? "feature-nav-active" : ""}`}>
                    <a href="#" onClick={(e) => handleTitle(e)} name="Time-Bound">
                        Time-Bound
                    </a>
                </li>
                <li className={`${title == "Innovative" ? "feature-nav-active" : ""}`}>
                    <a href="#" onClick={(e) => handleTitle(e)} name="Innovative">
                        Innovative
                    </a>
                </li>
            </ul>
            <div className="features-main">
                <div className="features-main-left">
                    <div className="features-main-left-description">
                        <motion.h3 variants={h1Variant} whileInView={getVariant()}>
                            {currentFeature.title}
                        </motion.h3>
                        <motion.p variants={pVariant} whileInView={getVariant()}>
                            {currentFeature.description}
                        </motion.p>
                    </div>
                    <motion.div variants={pointsVariant} whileInView={getVariant()} className="list-elements-div">
                        <ListElement text={currentFeature.points[0]} />
                        <ListElement text={currentFeature.points[1]} />
                        <ListElement text={currentFeature.points[2]} />
                        <ListElement text={currentFeature.points[3]} />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                        scale: { type: "spring", stiffness: 20 },
                        opacity: { duration: 0.8 },
                        ease: "easeIn",
                        duration: 1,
                    }}
                    className="features-main-right"
                >
                    <img src={currentFeature.img} className="feature-img" alt="features-main-right-img" />
                </motion.div>
            </div>
        </div>
    )
}

export default Features
