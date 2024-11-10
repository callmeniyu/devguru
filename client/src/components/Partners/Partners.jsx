import React from "react"
import hudon from "../../assets/svg/Hudon-logo.svg"
import manila from "../../assets/svg/Manila-logo.svg"
import nairobi from "../../assets/svg/nairobi_logo.svg"
import basel from "../../assets/svg/Basel-logo.svg"
import bern from "../../assets/svg/Bern-colored.svg"
import buenos from "../../assets/svg/Buenos-colored.svg"
import edinburgh from "../../assets/svg/edinburgh-colored.svg"
import kobe from "../../assets/svg/KOBE-colored.svg"
import Ljubljana from "../../assets/svg/Ljubljana-colored.svg"
import memphis from "../../assets/svg/Oslo-colored.svg"
import oslo from "../../assets/svg/Bern-colored.svg"
import venice from "../../assets/svg/venice-colored.svg"
import "./Partners.css"

const Partners = () => {
    return (
        <div className="partners">
            <div className="section-header">Creating Digital Success Stories for Emerging Brands</div>
            <div className="partners-top">
                <img src={hudon} alt="siemens" />
                <img src={manila} alt="medium" />
                <img src={nairobi} alt="okta" />
                <img src={basel} alt="sketchers" />
                <img src={bern} alt="autodesk" />
                <img src={buenos} alt="nasa" />
                <img src={hudon} alt="siemens" />
                <img src={manila} alt="medium" />
                <img src={nairobi} alt="okta" />
                <img src={basel} alt="sketchers" />
                <img src={bern} alt="autodesk" />
                <img src={buenos} alt="nasa" />
            </div>
            <div className="partners-bottom">
                <img src={edinburgh} alt="sony" />
                <img src={kobe} alt="cisco" />
                <img src={Ljubljana} alt="servicetitan" />
                <img src={memphis} alt="vmware" />
                <img src={oslo} alt="github" />
                <img src={venice} alt="alorica" />
                <img src={edinburgh} alt="sony" />
                <img src={kobe} alt="cisco" />
                <img src={Ljubljana} alt="servicetitan" />
                <img src={memphis} alt="vmware" />
                <img src={oslo} alt="github" />
                <img src={venice} alt="alorica" />
            </div>
        </div>
    )
}

export default Partners
