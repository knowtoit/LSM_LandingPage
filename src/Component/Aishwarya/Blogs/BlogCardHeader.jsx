import React from 'react'

const BlogCardHeader = () => {
  return (
    <div className='text-center'>
      <h1 className='mt-5' style={{fontSize:"40px"}}>Visit My Blog</h1>
      {/* <p style={{fontSize:"20px"}} className='mb-2 pb-75'>
      Our team is our proud. Each of the team members is dedicated to
delivering the best results to the clients.
      </p> */}
      {/* <div className='d-flex align-items-center justify-content-center mb-5 pb-50'>
        <h6 className='me-50 mb-0'>Monthly</h6>
        <div className='form-switch'>
          <Input id='plan-switch' type='switch' checked={duration === 'yearly'} onChange={onChange} />
        </div>
        <h6 className='ms-50 mb-0'>Annually</h6>
      </div> */}
    </div>
  )
}

export default BlogCardHeader