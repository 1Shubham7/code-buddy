import React from 'react'
import './coders.css'


const Coder  = ({coderData})=>{

  return (
    <>
    <div className="coder-sec">
    <div className='coder-name'>Name: {coderData !== undefined && coderData.name}</div>
    <div className='coder-details'>{coderData !== undefined && coderData.intro}</div>
    <div className='coder-details'><b>GitHub:</b> {coderData !== undefined && coderData.github}</div>
    <div className='coder-details'><b>Location</b> {coderData !== undefined && coderData.location}</div>
    </div>
    </>
  )
}

export default Coder