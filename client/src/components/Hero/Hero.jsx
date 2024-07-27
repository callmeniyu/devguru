import React, { useEffect } from "react"
import "./Hero.css"
import Button from "../Button/Button"
import { Tilt } from "react-tilt"
import hero_img from "../../assets/images/hero_right_img.png"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1>
                    Navigate the Digital Frontier with <span className="hero-left-h1-span">Devguru</span>.<br />
                    On-Time In-Budget
                </h1>
                <p>
                    DevGuru is your <span className="hero-left-p-span">tech partner</span>, Pioneering{" "}
                    <span className="hero-left-p-span">web solutions</span> and services that turn your digital dreams into
                    measurable, real-world success stories.
                </p>
                <Button />
            </div>
            <div className="hero-right">
                <Tilt>
                    <img src={hero_img} className="hero-right-img" alt="hero-img" />
                </Tilt>
            </div>
        </div>
    )
}

export default Hero
