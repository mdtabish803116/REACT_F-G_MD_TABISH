import React from 'react'
import errorCircleIcon from "../Images/errorCircleIcon.png";


function ErrorContainer() {
  return (
      <div style = {{display:"flex", gap: "15px", alignItems: "center" ,marginTop:"15px", backgroundColor:"rgba(205, 24, 24, 0.2)" , border : "1px solid red" , borderRadius:"4px"}}>
             <img style = {{width: "20px" , height:"20px",backgroundColor:"transparent"}}src = {errorCircleIcon}></img>
             <p style = {{color: "red"}}>Please Enter the value for the above field</p>
      </div>
  )
}

export default ErrorContainer