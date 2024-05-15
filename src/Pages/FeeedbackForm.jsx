import React from 'react'
import { useNavigate } from "react-router";
import "../Styles/FeedbackForm.css";
import ErrorContainer from '../Components/ErrorContainer';
import InputSingleCheck from '../Components/InputSingleCheck';
import flagIcon from "../Images/indianFlagIcon.jpeg";


function FeeedbackForm() {

    const [serviceInput , setServiceInput] = React.useState("");
    const [claeanInput , setCleanInput] = React.useState("");
    const [beverageInput , setBeverageInput] = React.useState("");
    const [experienceInput , setExperienceInput] = React.useState("");

    const [customerName , setCustomerName] = React.useState("");
    const [customerPhone , setCustomerPhone] = React.useState("");
    const [customerEmail , setcustomerEmail] = React.useState("");

    const [customerNameError , setCustomerNameError] = React.useState(false);
    const [mobileError , setMobileError] = React.useState(false);
    const [emailError , setEmailError] = React.useState(false);

    const navigate = useNavigate("/success")

    function handleSubmit(e){
       e.preventDefault();
       
       if (customerName === ""){
        setCustomerNameError(true)
        setMobileError(false)
        setEmailError(false)
       }else if(customerPhone === ""){
        setCustomerNameError(false)
        setMobileError(true)
        setEmailError(false)
       }else if(customerEmail === ""){
        setCustomerNameError(false)
        setMobileError(false)
        setEmailError(true)
       }else if(serviceInput === "" || claeanInput === "" || beverageInput === "" || experienceInput === "") {
        alert("Please Fill all the inputs")
        setCustomerNameError(false)
        setMobileError(false)
        setEmailError(false)
       }else {
        setCustomerNameError(false)
        setMobileError(false)
        setEmailError(false)

        if (!validateName(customerName)) {
            alert("Name should not be only number")
        }else if (!validateEmail(customerEmail)){
          alert("Please Enter valid email")
        }else if(!validatePhoneNumber(customerPhone)){
          alert("Please Enter valid Phone number")
        }else {  
          const payload = {
            customerName,
            customerPhone,
            customerEmail,
            serviceInput,
            claeanInput,
            beverageInput,
            experienceInput
          }
          let customerData = JSON.parse(localStorage.getItem("customerData")) || []
          localStorage.setItem("customerData" , JSON.stringify([...customerData , payload]))
          navigate("/success")
         }
       }
    }


    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    
    function validatePhoneNumber(phoneNumber) {
      const phoneRegex = /^\+?(\d{1,3})?[-. ]?\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;
      return phoneRegex.test(phoneNumber);
    }

    function validateName(name) {
      if (!name.trim()) {
          return false;
      }
      if (/^\d+$/.test(name)) {
          return false;
      }
  
      return true;
  }

  return (
    <div className = "feedbackContainer">
            <form className = "form" onSubmit={(e) => handleSubmit(e)}>
                   <div className = "innerFormBox">
                         <div>Aromatic bar</div>  
                         <div>
                               <div className='leftFormBox'>
                                    <div style = {{display:"flex", flexDirection:"column"}}>
                                         <label>Customer Name<span style={{color:"red"}}>*</span></label>
                                         <input type= "text" placeholder="Eg. john snow" style = {{marginTop:"10px"}} onChange={(e)=> setCustomerName(e.target.value)}></input>
                                    </div>
                                    {customerNameError && <ErrorContainer />}
                                    <div style = {{marginTop:"20px", marginBottom:"15px"}}>
                                     <label style = {{marginBottom:"15px"}}>Phone<span style={{color:"red"}}>*</span></label>
                                     <div style = {{display:"flex", gap:"15px"}}>
                                         <div style = {{display:"flex", alignItems:"center" , justifyContent:"center",width:"50px", height: "50px"}}>
                                             <img src = {flagIcon} style = {{width:"100%" , height: "80%", marginTop:"10px"}}></img>
                                         </div>
                                         <input type= "text" placeholder="9999999999" style = {{marginTop:"10px",width:"100%"}} onChange={(e)=> setCustomerPhone(e.target.value)}></input>
                                      </div>
                                  </div>

                                   {mobileError && <ErrorContainer />} 
                                    
                                    <InputSingleCheck props = {{title:"Please Enter the quality of the service you received from your host",selectedInput:setServiceInput}}/>
                                    <InputSingleCheck props = {{title:"Was our restaurant clean?",selectedInput:setCleanInput}}/>
                               </div>
                               <div className='rightFormBox'>
                                   <div style = {{display:"flex", flexDirection:"column"}}>
                                         <label>Customer Email<span style={{color:"red"}}>*</span></label>
                                         <input type= "text" placeholder="Eg. abc@gmail.com" style = {{marginTop:"10px"}} onChange={(e)=> setcustomerEmail(e.target.value)}></input>
                                    </div>
                                    {emailError && <ErrorContainer />}
                                    <InputSingleCheck props = {{title:"Please rate the quality of your beverage.",selectedInput:setBeverageInput,top:"100px"}}/>
                                    <InputSingleCheck props = {{title:"Please Rate your overall dinning experience.",selectedInput:setExperienceInput}}/>
                                     <div></div>
                               </div>
                         </div>
                   </div>
                   
                   <div style={{textAlign:"right", fontSize:"1.2rem", marginTop:"20px"}}>
                      <input type="submit" value="Submit Review"
                      style={{borderRadius:"5px",border:"none",padding:"10px 15px",
                      color:"white",backgroundColor:"green", fontSize:"0.9rem", marginRight:"20px"}} />
                  </div>

            </form>
    </div>
  )
}

export default FeeedbackForm