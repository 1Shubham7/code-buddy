import React from 'react'
import './search_page.css'

export default function Search_page() {
  return (
    <>
    <div className="page-section">
    <div className="search-bar">
    <input
        type="text"
        placeholder="Search..."
      />
    </div>
    <div className="labels"></div>
    <button type="submit">Labels</button>
    <button type="submit">Labels</button>
    <button type="submit">Labels</button>
    <button type="submit">Labels</button>
    <button type="submit">Labels</button>
    <div className="cards">
    </div>

      </div>
    </>
  )
}
