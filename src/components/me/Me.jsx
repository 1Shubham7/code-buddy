import React from 'react'
import './me.css'
import myPic from './myPic.png'

export default function Me() {
  return (
    <> 
    <div className="segment">
      <p className="my-text">
        HASDADFadsf
      </p>
      
    <img src={myPic} alt="hi" className="pic"/>
    </div>
    </>
  )
}
