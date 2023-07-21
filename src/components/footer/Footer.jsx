import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <> <div className="footer">
      <div className="row-one">
      <div className="socials">
        This i
      </div>
      <div className="text-part">
        <div className="text-links">
            <a href="#licenses" className="my-text-link-1">Licenses</a>
            <a href="#about" className="my-text-link-2">About</a>
            <a href="#privacy" className="my-text-link">Privacy Policy</a>
            <a href="#blogs" className="my-text-link">Blogs</a>
            <a href="#contribute" className="my-text-link">Contribute</a>
        </div>
        <div className="text-para">Coding Buddy helps you find your coding partner. This project is created with React and Golang. The code has been open-sourced on GitHub. The project is licensed under MIT License. Using this website means the user agrees to all the terms and contidions and well as the Privacy Policy of the project.</div>
      </div>
      </div>
      <div className="row-two">
      <h1 className="copyright">© 2023 All Rights Reserved</h1>
      </div>
    </div>
    
    </>
  )
}
