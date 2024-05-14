import React from 'react'
import FeeedbackForm from './FeeedbackForm'
import CustomerDetails from './CustomerDetails'

function Home() {

 let customerData = JSON.parse(localStorage.getItem("customerData")) || []

  return (
     <>
       {
        (customerData.length === 0) ? 
           <FeeedbackForm /> : <CustomerDetails props = {{data:customerData}} />
       }
     </> 
  )
}

export default Home