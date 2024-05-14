import React from 'react'
import { Link } from "react-router-dom";
import "../Styles/SuccessPage.css";

function SuccessPage() {
  return (
    <div className = "successConatiner">
          <div>
                <div>

                </div>
                <div>Thank you for Providing the feedback</div>
                <div>We will work towards improving your experience</div>
                <div style = {{marginTop : "20px"}}>
                <Link to ="/" 
                      style={{borderRadius:"5px",border:"none",marginTop:"30px",padding:"10px 20px",textDecoration:"none",
                      color:"white",backgroundColor:"green", fontSize:"0.9rem", marginRight:"20px"}} >Close</Link>
                </div>
               
          </div>
    </div>
  )
}

export default SuccessPage