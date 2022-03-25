import React from "react"
// import PropTypes from 'prop-types'

export default function  Header(props)
{
    return (
       
      <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
   
    )
}
// Header.defaultProps = {
//   title:"Hiii KD :)",
//   title3:false
// }
// Header.propTypes = {
//   title: PropTypes.string,
  
// }

