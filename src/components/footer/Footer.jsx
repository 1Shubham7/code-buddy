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
            <a href="#licenses" className="my-text-link-1">Licenses</a>
            <a href="#about" className="my-text-link-2">About</a>
            <a href="#privacy" className="my-text-link">Privacy Policy</a>
            <a href="#blogs" className="my-text-link">Blogs</a>
            <a href="#contribute" className="my-text-link">Contribute</a>
        </div>
        <div className="text-para">Coding Buddy - A tool that helps you identify coders who are as passionate as you. Filter out partners according to technology, country, interests etc.</div>
      </div>
      </div>
      <h1 className="copyright">© 2023 All Rights Reserved</h1>
    </div>
  )
}
