import React from 'react'

function InputSingleCheck({props}) {

  const [selectedCheckBox , setSelectedCheckbox] = React.useState(null);

  const handlecheckboxChange = (value) => {
     setSelectedCheckbox(value)
     props.selectedInput(value)
  }

  return (
    <div style = {{fontSize:"0.9rem" , fontWeight: "550", fontFamily:"sans-serif", marginTop:`${props.top?(props.top):("20px")}`, marginBottom:"50px"}}>
          <label >{props.title}<span style = {{color:"red"}}>*</span></label>
          <div style = {{display: "flex" , justifyContent:"space-between", marginTop:"10px",width:"80%"}}>
          <div style = {{display: "flex" , gap:"5px", alignItems:"center"}}>
               <input style = {{width: "15px" , height:"15px"}} type="checkbox" className = "inputCheckbox" value = "excellent"
               checked={selectedCheckBox === "excellent"}
               onChange = {(e)=> handlecheckboxChange(e.target.value)}/>
               <label >Excellent</label>
          </div>
          <div style = {{display: "flex", gap:"5px", alignItems:"center"}}>
              <input style = {{width: "15px" , height:"15px"}}  type="checkbox" className = "inputCheckbox" value = "good"
              checked={selectedCheckBox === "good"}
              onChange = {(e)=> handlecheckboxChange(e.target.value)}/>
               <label >Good</label>
          </div>
          <div style = {{display: "flex", gap:"5px", alignItems:"center"}}>
              <input style = {{width: "15px" , height:"15px"}}  type="checkbox" className = "inputCheckbox" value = "fair"
              checked={selectedCheckBox === "fair"}
              onChange = {(e)=> handlecheckboxChange(e.target.value)}/>
               <label >Fair</label>
           </div>
          <div style = {{display: "flex" , gap:"5px", alignItems:"center"}}>
               <input style = {{width: "15px" , height:"15px"}}  type="checkbox" className = "inputCheckbox" value = "bad"
               checked={selectedCheckBox === "bad"}
               onChange = {(e)=> handlecheckboxChange(e.target.value)}/>
               <label >Bad</label>
          </div>
            
          </div>
         

    </div>
  )
}

export default InputSingleCheck