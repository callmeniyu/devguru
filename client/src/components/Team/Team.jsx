import React from "react"
import "./Team.css"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import IdCard from "../IdCard/IdCard"
import niyas_img from "../../assets/images/me.jpg"
import { breakpoints } from "@mui/system"
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
                        600: {
                            perPage:1
                        },
                        800: {
                            perPage:2
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
                            projecs: "10",
                            github: "dfvdbgf",
                            linkedin: "dfvdbgf",
                            img: niyas_img,
                        }}
                    />
                </SplideSlide>
                <SplideSlide key={2} className="splide-container">
                    <IdCard
                        data={{
                            name: "Mohammed Niyas",
                            stack: "Mern Stack web developer",
                            experience: "3",
                            projecs: "10",
                            github: "dfvdbgf",
                            linkedin: "dfvdbgf",
                            img: niyas_img,
                        }}
                    />
                </SplideSlide>
                <SplideSlide key={3} className="splide-container">
                    <IdCard
                        data={{
                            name: "Mohammed Niyas",
                            stack: "Mern Stack web developer",
                            experience: "3",
                            projecs: "10",
                            github: "dfvdbgf",
                            linkedin: "dfvdbgf",
                            img: niyas_img,
                        }}
                    />
                </SplideSlide>
                <SplideSlide key={4} className="splide-container">
                    <IdCard
                        data={{
                            name: "Mohammed Niyas",
                            stack: "Mern Stack web developer",
                            experience: "3",
                            projecs: "10",
                            github: "dfvdbgf",
                            linkedin: "dfvdbgf",
                            img: niyas_img,
                        }}
                    />
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Team
