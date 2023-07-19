import React from 'react'
import './coding_buddy.css'
import bg_image from './bg_image.png';

export default function Coding_buddy() {
  return (


    <div className="website-head">
      <div className='image-container'>
        <div className="image-div">
      <img src={bg_image} alt="pic" className='fit-to-screen' />
      </div>
      </div>
    </div>
  )
}
