import React from 'react'
import { Link } from "react-router-dom";
import "../Styles/SuccessPage.css";
import successTicIcon from "../Images/succesTickIcon.webp";

function SuccessPage() {
  return (
    <div className = "successConatiner">
          <div style = {{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center",gap:"10px"}}>
                <div style = {{width: "40px" , height: "40px"}}>
                    <img style = {{width:"100%",height: "100%"}} src = {successTicIcon}></img>
                </div>
                <div style = {{fontSize:"1.2rem",fontWeight:"550", fontFamily:"sans-serif"}}>Thank you for Providing the feedback</div>
                <div  style = {{fontSize:"0.8rem",fontWeight:"500", fontFamily:"sans-serif"}}>We will work towards improving your experience</div>
                <div style = {{marginTop : "20px"}}>
                <Link to ="/" 
                      style={{borderRadius:"5px",border:"none",marginTop:"30px",padding:"10px 20px",textDecoration:"none",
                      color:"white",backgroundColor:"rgb(181, 112, 181)", fontSize:"0.9rem", marginRight:"20px"}} >Close</Link>
                </div>
               
          </div>
    </div>
  )
}

export default SuccessPage