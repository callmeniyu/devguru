import React, { useEffect, useState } from "react"
import ListElement from "../Listelement/Listelement"
import { features } from "../../utils/data"
import { motion, AnimatePresence } from "framer-motion"
import "./Features.css"
import { duration } from "@mui/material"

const Features = () => {
    const [title, setTitle] = useState("Proffesional")
    const handleTitle = (e) => {
        e.preventDefault()
        setTitle(e.target.name)
    }

    const currentFeature = features.find((feature) => feature.title == title)

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
    return (
        <div className="features">
            <h1 className="section-header">Features</h1>
            <ul className="features-navigate">
                <li>
                    <a href="#" onClick={(e) => handleTitle(e)} name="Proffesional">
                        Professional
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => handleTitle(e)} name="Cost-Effective">
                        Cost-Effective
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => handleTitle(e)} name="Scalable">
                        Scalable
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => handleTitle(e)} name="Secure">
                        Secure
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => handleTitle(e)} name="Time-Bound">
                        Time-Bound
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => handleTitle(e)} name="Innovative">
                        Innovative
                    </a>
                </li>
            </ul>
            <hr />
            <AnimatePresence initial={false}>
                <motion.div
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={currentFeature.id}
                    className="features-main"
                >
                    <div className="features-main-left">
                        <div className="features-main-left-description">
                            <motion.h3
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.1,
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 20,
                                    },
                                }}
                            >
                                {currentFeature.title}
                            </motion.h3>
                            <motion.p
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.2,
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 20,
                                    },
                                }}
                            >
                                {currentFeature.description}
                            </motion.p>
                        </div>
                        <motion.div
                             initial={{ x: -50, opacity: 0 }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.3,
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness:20
                                    },
                                }}
                            className="list-elements-div"
                        >
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
                            delay: 1,
                            scale: { type: "spring", stiffness: 20 },
                            opacity: { duration: 0.8 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className="features-main-right"
                    >
                        <img src={currentFeature.img} className="feature-img" alt="features-main-right-img" />
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Features
