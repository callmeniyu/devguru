import React from "react"
import Lottie from "lottie-react"
import error_404 from "../../assets/animations/error_404.json"
import "./Page404.css"

const Page404 = () => {
    return (
        <div className="page404">
            <h2 className="section-heder">This page is under Development.</h2>
            <Lottie animationData={error_404} className="error-404" />
        </div>
    )
}

export default Page404
