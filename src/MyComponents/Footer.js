import React from 'react'

export default function Footer() {
  let Footerstyle ={
    position:"relative",
    margin:"10px auto",
  }
  return (
    <footer style={Footerstyle} className='bg-dark text-light py-2'>
      <p className="text-center">It is a footer  From Footer</p>
    </footer>
  )
}
