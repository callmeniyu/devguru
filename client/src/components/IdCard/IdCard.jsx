import React from "react"
import "./IdCard.css"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import LocalPoliceIcon from "@mui/icons-material/LocalPolice"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import { Link } from "react-router-dom"

const IdCard = ({data}) => {
    return (
        <div className="idcard">
            <div className="idcard-left">
                <img src={data.img} alt="idcard-img" className="idcard-img" />
            </div>
            <div className="idcard-right">
                <div className="idcard-right-top">
                    <h3>{ data.name}</h3>
                    <p>{data.stack}</p>
                </div>
                <div className="idcard-right-bottom">
                    <div className="idcard-details">
                        <div className="idcard-entity">
                            <LocalPoliceIcon />
                            <h4>Experience</h4>
                            <p>{ data.experience}+ years</p>
                        </div>
                        <div className="idcard-entity">
                            <BusinessCenterIcon />
                            <h4>Completed</h4>
                            <p>{ data.projects}+ Projects</p>
                        </div>
                    </div>
                    <div className="idcard-icons">
                        <Link to={data.linkedin}><LinkedInIcon className="idcard-social-icon" /></Link>
                        <Link to={data.github}><GitHubIcon className="idcard-social-icon" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IdCard
