import React from "react"
import reactLogo from "../../assets/svg/react.svg"
import nodejsLogo from "../../assets/svg/nodejs.svg"
import figmaLogo from "../../assets/svg/figma.svg"
import canvaLogo from "../../assets/svg/canva.svg"
import javascrpitLogo from "../../assets/svg/javascript.svg"
import mongoLogo from "../../assets/svg/mongo.svg"
import flutterLogo from "../../assets/svg/flutter.svg"
import djangoLogo from "../../assets/svg/django.svg"
import postgreLogo from "../../assets/svg/postgre.svg"
import postmanLogo from "../../assets/svg/postman.svg"
import chatgptLogo from "../../assets/svg/chatgpt.svg"
import pythonLogo from "../../assets/svg/python.svg"
import githubLogo from "../../assets/svg/githubicon.svg"
import nextjsLogo from "../../assets/svg/next.svg"
import { motion } from "framer-motion"
import "./Technologies.css"

const Technologies = () => {
    return (
        <div className="technology">
            <div className="technology-left">
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: 0.2,
                            duration: 0.5,
                        },
                    }}
                    className="section-header"
                >
                    The Engines of Our Expertise
                </motion.h2>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: 0.4,
                            duration: 0.5,
                        },
                    }}
                >
                    At the core of our expertise lies a commitment to using the latest tools and frameworks to build
                    exceptional web products. Experience the future of web development with devguru, where technology and
                    expertise converge to create extraordinary digital solutions.
                </motion.p>
            </div>
            <div className="technology-right">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: 0.3,
                            duration: 0.5,
                        },
                    }}
                    className="technology-right-row1"
                >
                    <img src={reactLogo} alt="canvaLogo" className="technology-logo react-logo" />
                    <img src={nodejsLogo} alt="nodejsLogo" className="technology-logo node-logo" />
                    <img src={figmaLogo} alt="figmaLogo" className="technology-logo figma-logo" />
                    <img src={mongoLogo} alt="davinciLogo" className="technology-logo davinci-logo" />
                    <img src={canvaLogo} alt="canvaLogo" className="technology-logo canva-logo" />
                    <img src={javascrpitLogo} alt="javascrpitLogo" className="technology-logo javascrpit-logo" />
                </motion.div>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: 0.5,
                            duration: 0.5,
                        },
                    }}
                    className="technology-right-row2"
                >
                    <img src={djangoLogo} alt="djangoLogo" className="technology-logo django-logo" />
                    <img src={postgreLogo} alt="postgreLogo" className="technology-logo postgre-logo" />
                    <img src={chatgptLogo} alt="chatgptLogo" className="technology-logo chatgpt-logo" />
                    <img src={pythonLogo} alt="pythonLogo" className="technology-logo python-logo" />
                    <img src={githubLogo} alt="githubLogo" className="technology-logo github-logo" />
                    <img src={nextjsLogo} alt="nextjsLogo" className="technology-logo nextjs-logo" />
                </motion.div>
            </div>
        </div>
    )
}

export default Technologies
