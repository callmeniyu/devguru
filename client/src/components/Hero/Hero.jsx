import React from "react"
import "./Hero.css"
import Button from "../Button/Button"
import { motion } from "framer-motion"
import hero_img from "../../assets/images/hero_right_img.png"
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 });

    const h1Variant = {
        small: {
            y: [-50, 0],
            opacity: [0, 1],
            transition: { duration: 0.5, delay: 0.2, stiffness: 20, type: "spring" }
        },
        large: {
            x: [-50, 0],
            opacity:[0,1],
            transition:{duration:0.5, delay:0.2, stiffness:20, type:"spring"}
        }
    }
    const imgVariant = {
        small: {
            y: [-50, 0],
            opacity: [0, 1],
            transition: { duration: 0.5, delay: 0.2, stiffness: 20, type: "spring" }
        },
        large: {
            x: [50, 0],
            opacity:[0,1],
            transition:{duration:0.5, delay:0.2, stiffness:20, type:"spring"}
        }
    }
    const pVariant = {
        small: {
            y: [-50, 0],
            opacity: [0, 1],
            transition: { duration: 0.5, delay: 0.4, stiffness: 20, type: "spring" }
        },
        large: {
            x: [-60, 0],
            opacity:[0,1],
            transition:{duration:0.5, delay:0.4, stiffness:20, type:"spring"}
        }
    }
    const buttonVariant = {
        small: {
            y: [-50, 0],
            opacity: [0, 1],
            transition: { duration: 0.5, delay: 0.5, stiffness: 20, type: "spring" }
        },
        large: {
            x: [-70, 0],
            opacity:[0,1],
            transition:{duration:0.5, delay:0.5, stiffness:20, type:"spring"}
        }
    }

    const getVariant = () => {
        if (isSmallScreen) return 'small';
        return 'large';
    }
    
    return (
        <div className="hero">
            <div className="hero-left">
                <motion.h1
                    variants={h1Variant}
                    whileInView={getVariant()}
                >
                    Navigate the Digital Frontier with <span className="hero-left-h1-span">Devguru</span>.<br />
                    On-Time In-Budget
                </motion.h1>
                <motion.p
                    variants={pVariant}
                    whileInView={getVariant()}
                >
                    Devguru is your <span className="hero-left-p-span">tech partner</span>, pioneering 
                    <span className="hero-left-p-span"> web solutions</span> and services that turn your digital dreams into
                    measurable, real-world success stories.
                </motion.p>
                <motion.div
                    variants={buttonVariant}
                    whileInView={getVariant()}
                >
                <Button text="Book Now!" to="contact" smooth={true} duration={100}/>
                </motion.div>
            </div>
            <div className="hero-right">
                <motion.img
                    variants={imgVariant}
                    whileInView={getVariant()}
                    src={hero_img}
                    className="hero-right-img"
                    alt="hero-img"
                />
            </div>
        </div>
    )
}

export default Hero
