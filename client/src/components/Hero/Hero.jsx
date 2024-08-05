import React, { useEffect } from "react"
import "./Hero.css"
import Button from "../Button/Button"
import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import hero_img from "../../assets/images/hero_right_img.png"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 20,duration:0.1 },
                        opacity: { duration: 0.6 },
                        ease: "easeIn",
                        duration: 1,
                    }}
                >
                    Navigate the Digital Frontier with <span className="hero-left-h1-span">Devguru</span>.<br />
                    On-Time In-Budget
                </motion.h1>
                <motion.p
                    initial={{ x: -120, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.3,
                        x: { type: "spring", stiffness: 20 },
                        opacity: { duration: 0.8 },
                        ease: "easeIn",
                        duration: 2,
                    }}
                >
                    DevGuru is your <span className="hero-left-p-span">tech partner</span>, Pioneering{" "}
                    <span className="hero-left-p-span">web solutions</span> and services that turn your digital dreams into
                    measurable, real-world success stories.
                </motion.p>
                <motion.div
                initial={{ x: -130, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.4,
                        x: { type: "spring", stiffness: 20 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        duration: 3,
                    }}
                >
                <Button text="Book Now!" />
                </motion.div>
            </div>
            <div className="hero-right">
                <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 20 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        duration: 1,
                    }}
                    src={hero_img}
                    className="hero-right-img"
                    alt="hero-img"
                />
            </div>
        </div>
    )
}

export default Hero
