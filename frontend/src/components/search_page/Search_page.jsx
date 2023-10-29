import React from 'react'
import './search_page.css'

export default function Search_page() {
  return (
    <>
    <div className="page-section">
    <div className="search-bar-holder">
    <input
        type="text"
        placeholder="Search..."
        className='search-bar'
      />
    </div>
    <div className="labels"></div>
    <button type="submit" >Filter By</button>
    <button type="submit" className="label-tags">Technologies</button>
    <button type="submit" className="label-tags">Countries</button>
    <button type="submit" className="label-tags">Interests</button>
    <button type="submit" className="label-tags">Experience</button>
    <div className="cards-holder">
      <div className="cards"></div>
    </div>

      </div>
    </>
  )
}
