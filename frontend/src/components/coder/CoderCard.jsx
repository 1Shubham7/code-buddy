import React from 'react'
import './coders.css'


const Coder  = ({coderData})=>{

  return (
    <>
    <div className='coder-name'>Name: {coderData !== undefined && coderData.name}</div>
    <div className='coder-name'>Intro: {coderData !== undefined && coderData.intro}</div>
    <div className='coder-name'>GitHub: {coderData !== undefined && coderData.github_id}</div>
    <div className='coder-name'>Location: {coderData !== undefined && coderData.location}</div>
    </>
  )
}

export default Coder