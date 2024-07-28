import React from 'react'
import { Link } from "react-router-dom"
import "./Button.css"
const Button = (props) => {
  let classes = props.className
  return (
    <Link className={`btn ${classes}`} to="#">Book Now!  <span></span><span></span><span></span><span></span></Link>
  )
}

export default Button