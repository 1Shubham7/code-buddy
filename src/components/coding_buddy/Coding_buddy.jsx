import React from 'react'
import './coding_buddy.css'
import bg_image from './bg_image.png';

export default function Coding_buddy() {
const textDisplay = document.getElementById('tt')
const phrases = ["Find you Coding Buddy", "Participate in Hackathons, Competitions and events together", "Build projects together and get hired"]

let i=0
let j=0
let currentPhrase = []
let isDeleting = false

function loop() {
  textDisplay.innerHTML = currentPhrase.join("")

  if (i<phrases.length) {

  if (!isDeleting && j <= phrases[i].length){
    currentPhrase.push(phrases[i][j])
    j++
  }

  if (isDeleting  && j<= phrases[i].length){
    currentPhrase.pop(phrases[i][j])
    j--
  }


  if (j === phrases[i].length){
    isDeleting = true
  }

  if (isDeleting && j === 0) {
    currentPhrase = []
    isDeleting = false
    i++
  }

}
setTimeout(loop, 500)
}

loop()

  return (


    <div className="website-head">
      <div className='image-container'>
        <div className="image-div">
          <div className="main-text" >
            <p id="tt"></p>
          </div>
      </div>
      </div>
    </div>
  )
}
