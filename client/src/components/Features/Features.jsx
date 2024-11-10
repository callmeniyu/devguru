import React, { useEffect, useState } from "react"
import ListElement from "../Listelement/Listelement"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "react-responsive"
import "./Features.css"
import feature_img_proffesional from "../../assets/svg/feature_img_professional.svg"
import feature_img_costeffective from "../../assets/svg/feature_img_costeffective.svg"
import feature_img_scalable from "../../assets/svg/feature_img_scalable.svg"
import feature_img_secure from "../../assets/svg/feature_img_secure.svg"
import feature_img_timebound from "../../assets/svg/feature_img_timebound.svg"
import feature_img_innovative from "../../assets/svg/feature_img_innovative.svg"




const Features = () => {

    const features = [
        {
            id: 1,
            title: "Professional",
            description:
                "We deliver exceptionally professional services that not only meet but exceed your expectations, ensuring your complete satisfaction.",
            points: [
                "Experienced team of certified developers and designers.",
                "Tailored solutions aligned with industry best practices.",
                "Clear communication and transparent project management.",
                "Rigorous quality assurance and testing processes. Commitment to ethical business practices and confidentiality.",
            ],
            img: feature_img_proffesional,
        },
        {
            id: 2,
            title: "Cost-Effective",
            description:
                "We provide high-quality web solutions that maximize your return on investment, ensuring you get the best value for your budget.",
            points: [
                "Competitive pricing without compromising on quality.",
                "Flexible payment options to suit your financial needs.",
                "Efficient development processes to minimize costs.",
                "Transparent pricing with no hidden fees.",
                "Long-term cost savings through robust, maintainable code.",
            ],
            img: feature_img_costeffective,
        },
        {
            id: 3,
            title: "Scalable",
            description:
                "We build flexible web solutions designed to grow and evolve with your business, ensuring long-term success and adaptability.",
            points: [
                "Modular architecture for easy expansion and modification.",
                "Future-proof design to accommodate increasing user loads.",
                "Easily integrable with new technologies and third-party services.",
                "Customizable features to meet changing business requirements.",
                "Performance optimization to maintain speed as complexity grows.",
            ],
            img: feature_img_scalable,
        },
        {
            id: 4,
            title: "Secure",
            description:
                "We prioritize the protection of your data and systems, implementing robust security measures to safeguard your digital assets.",
            points: [
                "End-to-end encryption for data protection.",
                "Secure user authentication and authorization systems.",
                "Role-based access control for internal systems.",
                "Secure API integration and management.",
            ],
            img: feature_img_secure,
        },
        {
            id: 5,
            title: "Time-Bound",
            description:
                "We deliver high-quality web solutions within agreed timelines, ensuring your project launches on schedule and meets your business objectives.",
            points: [
                "Strict adherence to project deadlines and milestones.",
                "Clear timeline communication and regular progress updates.",
                "Efficient resource allocation to optimize development speed.",
                "Strategic planning to anticipate and prevent delays.",
                "Parallel development workflows to accelerate project completion.",
            ],
            img: feature_img_timebound,
        },
        {
            id: 6,
            title: "Innovative",
            description:
                "We leverage modern technologies and creative problem-solving to deliver forward-thinking web solutions that keep you ahead of the curve.",
            points: [
                "Implementation of the latest web development frameworks and technologies.",
                "Innovative UI/UX design for enhanced user engagement.",
                "Custom-built solutions tailored to unique business challenges.",
                "Use of low-code/no-code platforms for rapid prototyping and development.",
            ],
            img: feature_img_innovative,
        },
    ]

    useEffect(() => {
        const preloadImages = (srcArray) => {
            srcArray.forEach((src) => {
                const img = new Image();
                img.src = src;
            });
        };
        preloadImages(features.map((feature) => feature.img));
    }, []);

    const [title, setTitle] = useState(features[0].title)

    const handleTitle = (e) => {
        e.preventDefault()
        setTitle(e.target.name)
    }
    

    const currentFeature = features.find((feature) => feature.title == title)


    const isSmallScreen = useMediaQuery({ maxWidth: 600 })

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
                <li className={`${title == "Professional" ? "feature-nav-active" : ""}`}>
                    <a href="#" onClick={(e) => handleTitle(e)} name="Professional">
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
