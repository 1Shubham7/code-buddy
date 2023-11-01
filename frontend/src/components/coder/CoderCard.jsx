import React from 'react'
import './coders.css'


const Coder  = ({coderData})=>{

  return (
    <>
    <div className='coder-name'>Name: {coderData !== undefined && coderData.name}</div>
    <div className='coder-details'>Intro: {coderData !== undefined && coderData.intro}</div>
    <div className='coder-details'>GitHub: {coderData !== undefined && coderData.github}</div>
    <div className='coder-details'>Location: {coderData !== undefined && coderData.location}</div>
    </>
  )
}

export default Coder