import React from 'react'


const Coder  = ({coderData})=>{

  return (
    <>
    <h1>Name: {coderData!==undefined && coderData.name}</h1>
    </>
  )
}

export default Coder