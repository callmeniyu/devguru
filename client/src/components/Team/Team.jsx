import React from "react"
import "./Team.css"
import { Carousel } from "react-responsive-3d-carousel"
import IdCard from "../IdCard/IdCard"
import niyas_img from "../../assets/images/me.jpg"
const Team = () => {
    return (
        <div className="team">
            <h3 className="section-header">Meet Our Team</h3>
            <Carousel
                className="team-carousel"
                interval="4000"
                autoPlay={false}
                showIndicators={false}
                width="23rem"
                height="13.5rem"
                showStatus={false}
                arrowsWidth="2rem"
                arrowsHeight="2rem"
                arrowsDefaultColor="black"
                isArrowsShadow={false}
                selectable={true}
            >
                <IdCard
                    data={{
                        name: "Mohammed Niyas",
                        stack: "Mern Stack Web Developer",
                        experience: "2",
                        projects: "10",
                        github: "https://github.com/callmeniyu",
                        linkedin: "https://www.linkedin.com/in/callmeniyu/",
                        img: niyas_img,
                    }}
                />
                <IdCard
                    data={{
                        name: "Mohammed Niyas",
                        stack: "Mern Stack Web Developer",
                        experience: "2",
                        projects: "10",
                        github: "https://github.com/callmeniyu",
                        linkedin: "https://www.linkedin.com/in/callmeniyu/",
                        img: niyas_img,
                    }}
                />
                <IdCard
                    data={{
                        name: "Mohammed Niyas",
                        stack: "Mern Stack Web Developer",
                        experience: "2",
                        projects: "10",
                        github: "https://github.com/callmeniyu",
                        linkedin: "https://www.linkedin.com/in/callmeniyu/",
                        img: niyas_img,
                    }}
                />
                <IdCard
                    data={{
                        name: "Mohammed Niyas",
                        stack: "Mern Stack Web Developer",
                        experience: "2",
                        projects: "10",
                        github: "https://github.com/callmeniyu",
                        linkedin: "https://www.linkedin.com/in/callmeniyu/",
                        img: niyas_img,
                    }}
                />
                <IdCard
                    data={{
                        name: "Mohammed Niyas",
                        stack: "Mern Stack Web Developer",
                        experience: "2",
                        projects: "10",
                        github: "https://github.com/callmeniyu",
                        linkedin: "https://www.linkedin.com/in/callmeniyu/",
                        img: niyas_img,
                    }}
                />
            </Carousel>
        </div>
    )
}

export default Team
