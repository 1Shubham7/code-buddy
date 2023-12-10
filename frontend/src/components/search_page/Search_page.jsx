import React from 'react'
import './search_page.css'
import Coders from '../coder/CoderCards'

export default function Searchpage() {
  return (
    <>
    <div className="page-section">
    <div className="search-buttons">

    <div className="search-bar-holder">
    <input
        type="text"
        placeholder="Search..."
        className='search-bar'
      />
    </div>
    <div className="extra-buttons">
    <div className="labels"></div>
    <button type="submit" >Filter By</button>
    <button type="submit" className="label-tags">Technologies</button>
    <button type="submit" className="label-tags">Countries</button>
    <button type="submit" className="label-tags">Interests</button>
    <button type="submit" className="label-tags">Experience</button>
    </div>
    </div>
    <div className="cards-holder">
      <div className="cards">
        <Coders />
      </div>
    </div>

      </div>
    </>
  )
}
