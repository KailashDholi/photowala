import React from 'react'
import TestUsers from './TestUsers'

export default function Users(props) {
    let Mystyle = {
      minHeight:"61vh",
    }
  return (
    <section style={Mystyle} className='container my-3'>
    <div  >
        <h3>Users</h3>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User Name</th>
      <th scope="col">Password</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
    {props.users.length === 0 ? "NO User Found !" :props.users.map((us)=>{
         return (
            <TestUsers user={us} key={us.Sno} ondelete={props.ondelete}/>

         )
        })}
        
        </table>
        
     
        
      
    </div>
    </section>
  )
}
