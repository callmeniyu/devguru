import React from "react"
import "./BookNow.css"
import { motion } from "framer-motion"
import Button from "../Button/Button"

const BookNow = () => {
    return (
        <div className="booknow">
            <motion.h2
                initial={{ y: 40, opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: 0.1,
                        duration: 0.5,
                    },
                }}
                className="section-header"
            >
                You are a click away from us
            </motion.h2>
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: 0.2,
                        duration: 0.5,
                    },
                }}
                className="booknow-btns"
            >
                <Button text="Book your slot now!" className="intimate-btn" />
                <Button text="Contact us now" className="black-btn intimate-btn" />
            </motion.div>
            <motion.p
                            initial={{ y: 40, opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: 0.3,
                        duration: 0.5,
                    },
                }}
            >We will connect with you soon!</motion.p>
        </div>
    )
}

export default BookNow
