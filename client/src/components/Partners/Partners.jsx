import React from "react"
import siemens from "../../assets/svg/siemens.svg"
import medium from "../../assets/svg/medium.svg"
import okta from "../../assets/svg/okta.svg"
import sketchers from "../../assets/svg/sketchers.svg"
import autodesk from "../../assets/svg/autodesk.svg"
import nasa from "../../assets/svg/nasa.svg"
import sony from "../../assets/svg/sony.svg"
import cisco from "../../assets/svg/cisco.svg"
import servicetitan from "../../assets/svg/servicetitan.svg"
import vmware from "../../assets/svg/vmware.svg"
import github from "../../assets/svg/github.svg"
import alorica from "../../assets/svg/alorica.svg"
import "./Partners.css"

const Partners = () => {
    return (
        <div className="partners">
            <div className="section-header">Creating Digital Success Stories for Emerging Brands</div>
            <div className="partners-top">
                <img src={siemens} alt="" />
                <img src={medium} alt="" />
                <img src={okta} alt="" />
                <img src={sketchers} alt="" />
                <img src={autodesk} alt="" />
                <img src={nasa} alt="" />
                <img src={siemens} alt="" />
                <img src={medium} alt="" />
                <img src={okta} alt="" />
                <img src={sketchers} alt="" />
                <img src={autodesk} alt="" />
                <img src={nasa} alt="" />
            </div>
            <div className="partners-bottom">
                <img src={sony} alt="" />
                <img src={cisco} alt="" />
                <img src={servicetitan} alt="" />
                <img src={vmware} alt="" />
                <img src={github} alt="" />
                <img src={alorica} alt="" />
                <img src={sony} alt="" />
                <img src={cisco} alt="" />
                <img src={servicetitan} alt="" />
                <img src={vmware} alt="" />
                <img src={github} alt="" />
                <img src={alorica} alt="" />
            </div>
        </div>
    )
}

export default Partners
