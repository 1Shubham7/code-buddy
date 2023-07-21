import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
      <div className="socials">

      </div>
      <div className="text-part">
        <div className="text-links">
          <ul>
            <li className="my-text-link">Licenses</li>
            <li className="my-text-link">About</li>
            <li className="my-text-link">Privacy Policy</li>
            <li className="my-text-link">Blogs</li>
            <li className="my-text-link">Contribute</li>
          </ul>
        </div>
        <div className="text-para">Coding Buddy - A tool that helps you identify coders who are as passionate as you. Filter out partners according to technology, country, interests etc.</div>
      </div>
      </div>
      <h1 className="copyright">© 2023 All Rights Reserved</h1>
    </div>
  )
}
