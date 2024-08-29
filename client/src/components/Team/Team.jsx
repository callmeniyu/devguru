import React from "react"
import "./Team.css"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import IdCard from "../IdCard/IdCard"
import niyas_img from "../../assets/images/me.jpg"
import shihad_img from "../../assets/images/shihad_img.jpeg"
import rizad_img from "../../assets/images/rizad_img.jpeg"
import sadiq_img from "../../assets/images/sadiq_img.jpg"
const Team = () => {
    return (
        <div className="team">
            <h3 className="section-header">Meet Our Team</h3>
            <Splide
                options={{
                    type: "loop",
                    perPage: 3,
                    perMove: 1,
                    focus:0,
                    breakpoints: {
                        500: {
                            perPage:0.5
                        },
                        600: {
                            perPage:1
                        },
                        800: {
                            perPage:2
                        },
                        1150: {
                            perPage:2.5
                        },
                    },
                    pagination: true,
                    autoplay: true,
                    arrows: false,
                    interval: "2000",
                    gap: "1rem",
                    height: "15rem",
                }}
                aria-label="React Splide Example"
                className="splide"
            >
                <SplideSlide className="splide-container" key={1}>
                    <IdCard
                        data={{
                            name: "Mohammed Niyas",
                            stack: "Mern Stack web developer",
                            experience: "3",
                            projects: "8",
                            github: "https://github.com/callmeniyu",
                            linkedin: "https://www.linkedin.com/in/callmeniyu/",
                            img: niyas_img,
                        }}
                    />
                </SplideSlide>
                <SplideSlide key={2} className="splide-container">
                    <IdCard
                        data={{
                            name: "Mohammed Shihad",
                            stack: "NextJs developer",
                            experience: "4",
                            projects: "15",
                            github: "https://github.com/MuhammedshihadTP",
                            linkedin: "https://www.linkedin.com/in/muhammed-shihad-887a77251/",
                            img: shihad_img,
                        }}
                    />
                </SplideSlide>
                <SplideSlide key={3} className="splide-container">
                    <IdCard
                        data={{
                            name: "Mohamed Rizad",
                            stack: "Pentester/Cyber Security",
                            experience: "5",
                            projects: "25",
                            github: "https://github.com/riz4d",
                            linkedin: "https://www.linkedin.com/in/mohamedrizad/?utm_source=share&utm_campaign=share_via&utm_content=profile",
                            img: rizad_img,
                        }}
                    />
                </SplideSlide>
                <SplideSlide key={4} className="splide-container">
                    <IdCard
                        data={{
                            name: "Sadiq Ali",
                            stack: "Python developer",
                            experience: "2",
                            projects: "5",
                            github: "https://github.com/4TechSadiq",
                            linkedin: "https://www.linkedin.com/in/moh-sadiq-ali/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                            img: sadiq_img,
                        }}
                    />
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Team
