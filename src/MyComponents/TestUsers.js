import React from 'react'

export default function TestUsers({user,ondelete}) {
  return (
    
  <tbody>
    <tr>
      <th scope="row">{user.Sno}</th>
      <td >{user.userName}</td>
      <td>{user.password}</td>
      <td><button className='btn btn-danger btn-sm' onClick={()=>{ondelete(user)}}>Delete</button></td>
    </tr>
  </tbody>

  )
}
