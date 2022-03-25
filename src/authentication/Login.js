import React from 'react'
import PropTypes from 'prop-types'

export default function Login(props) 
{
  return(
    <div>
      <h2>Login Form</h2>
      
      <form className="form1">
        <br></br>
     <div className='container'>
         <div className='row'>
         <div className='col-md-4'>
           <label for='usernm' >User Name </label>
             <input className='form-control' id='usernm' name='user_name' placeholder='Enter User Name'></input>
               
             </div>
         </div>
         <div className='row'>
           <div className='col-md-4'>
             <label htmlFor='pass'>Password </label>
           <input className='form-control' id='pass' name='password' placeholder='Enter password'></input>
             
           </div>
         </div>
         <div className='row'>
           <div className='col-md-4'>
             <label htmlFor='pass'>Upload Image </label>
           <input className='form-control' id='pass' name='image' type='file' placeholder='Enter password'></input>
             
           </div>
           {/* {alert(props.chekVar)} */}
         </div>
         {props.chekVar ? <div className='row'>
           <div className='col-md-4'>
           <input type='submit' className='btn btn-primary'></input>
           </div>
         </div> :""}
        
         </div>
        </form>
      
      
    </div>
  )
}

Login.defaultProps = {
  chekVar:false
}
Login.propsType = {
  chekVar: PropTypes.bool.isRequired
}