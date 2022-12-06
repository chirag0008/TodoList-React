import React from 'react'
import './stylee.css';
const Help = (props) => {
  return (
  <>
  <button className='btn2' onClick={()=>{props.onSelect(props.id)}}>X</button>&nbsp;&nbsp;
  <li className='lii'>{props.vali}</li><br></br>
  </>
  )
}

export default Help;