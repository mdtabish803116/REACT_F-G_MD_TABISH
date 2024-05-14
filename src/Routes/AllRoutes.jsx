import React from 'react'
import {Route , Routes} from "react-router-dom"
import Home from '../Pages/Home'
import FeeedbackForm from '../Pages/FeeedbackForm'
import CustomerDetails from '../Pages/CustomerDetails'
import SuccessPage from '../Pages/SuccessPage'


function AllRoutes() {
  return (
    <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/feedback" element={<FeeedbackForm/>}></Route>
          <Route path="/customerdetails" element={<CustomerDetails/>}></Route>
          <Route path="/success" element={<SuccessPage/>}></Route>
    </Routes>
  )
}

export default AllRoutes