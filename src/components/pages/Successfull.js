import React from 'react'
import { Link } from 'react-router-dom'
function Successfull() {
  return (
    <>
    <div className=" d-flex  flex-column justify-center ">
      <h3 className='text-center text-success '>Your Order Sucessfully Submitted
      ThankYou
       </h3>
       <Link to='/' className='mx-auto bg-success text-decoration-none py-2 px-2 text-white'>Return Home</Link>
       </div>
    </>
  )
}

export default Successfull
