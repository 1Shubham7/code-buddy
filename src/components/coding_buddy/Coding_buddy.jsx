import React from 'react'
import './coding_buddy.css'
// import bg_image from './bg_image.png';


export default function Coding_buddy() {
const textDisplay = document.getElementById('tt');
const phrases = ["Find you Coding Buddy", "Participate in Hackathons, Competitions and events together", "Build projects together and get hired"];

let i=0
let j=0
let currentPhrase = []
let isDeleting = false
let isEnd = false

const loop = ()=> {

 isEnd =  false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i<phrases.length) {
  if (!isDeleting && j <= phrases[i].length){
    currentPhrase.push(phrases[i][j])
    j++
    textDisplay.innerHTML = currentPhrase.join('')
  }

  if (isDeleting  && j<= phrases[i].length){
    currentPhrase.pop(phrases[i][j])
    j--
    textDisplay.innerHTML = currentPhrase.join('')
  }


  if (j === phrases[i].length){
    isEnd = true
    isDeleting = true
  }

  if (isDeleting && j === 0) {
    currentPhrase = []
    isDeleting = false
    i++

    if (i=== phrases.length){
      i=0
    }
  }
}
const spedUp = Math.random() * (80-50) + 50
const normalSpeed = Math.random() * (300-200) + 200
const time = isEnd ? 2000: isDeleting ? spedUp : normalSpeed
setTimeout(loop, time)
}

// loop()



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
