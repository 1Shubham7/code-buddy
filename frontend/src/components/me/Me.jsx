import React from 'react'
import './me.css'
import myPic from './myPic.png'

export default function Me() {
  return (
    <> 
    <div className="segment">
      {/* <div className="flexarea"> */}
      <div className="my-text">
        <p className="love">Made with Love by</p>
        <p className="name">Shubham Singh|</p>
        <p className="description">GSSoC'23 | Web Dev | Dev Ops | Android dev |
           Open-source Enthusiast | Technical Writer |
            Postman Student Expert | First year Undergrad 
            (Computer Science Eng.)</p>
      
      </div>
    <img src={myPic} alt="hi" className="pic"/>
      </div>
    {/* </div> */}
    </>
  )
}
