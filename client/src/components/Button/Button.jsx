import React from 'react'
import { Link } from "react-scroll"; 
import "./Button.css"
const Button = (props) => {
  let classes = props.className
  return (
    <Link className={`btn ${classes}`} to={ props.to || null}>{props.text}  <span></span><span></span><span></span><span></span></Link>
  )
}

export default Button