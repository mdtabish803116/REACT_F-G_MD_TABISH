import React from 'react'
import { Link } from "react-router-dom";
import "../Styles/CustomerDetails.css";

function CustomerDetails({props}) {

   
  return (
    <div className = "customerContainer">
       <div>
        <div className = "addNewCustomerBox">
            <div>Aromatic bar</div>
               <Link to ="/feedback" 
                      style={{borderRadius:"5px",border:"none",padding:"10px 15px",textDecoration:"none",
                      color:"white",backgroundColor:"green", fontSize:"0.9rem", marginRight:"20px"}} >Add New</Link>
        </div>
        <div>
           <table className="table">
                 <thead>
                        <tr>
                             <th>
                                 <input style = {{width:"20px" , height:"20px"}} 
                                 type="checkbox" 
                                 className="inputCheckBox" 
                                 ></input>
                             </th>
                             <th>Form Details</th>
                             <th>Customer Name</th>
                             <th>Email</th>
                             <th>Phone</th>
                             <th>Please Rate the quality of service you received from your host</th>
                             <th>Please</th>
                        </tr>
                 </thead>
                 <tbody>
                     {
                      props.data.map((item , index) => ( 
                       <tr key = {index}>
                          <td>
                            <input style = {{width:"20px" , height:"20px"}} 
                            type="checkbox" 
                            className="inputCheckBox"></input>
                          </td>
                          <td>
                             <a>View Details</a>
                          </td>
                          <td>{item.customerName}</td>
                          <td>{item.customerPhone}</td>
                          <td>{item.customerEmail}</td>
                          <td>{item.serviceInput}</td>
                          <td></td>
                     </tr>
                      ))
                      }
                 </tbody>
             </table>
          </div>
       </div>
    </div>
  )
}

export default CustomerDetails