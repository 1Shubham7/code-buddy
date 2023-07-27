import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_container">
          <div className="coding-buddy"><a href="#home">Coding Buddy</a></div>
          <p><a href="#facb">Find a Coding Buddy</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#community">Community</a></p>
          <p><a href="https://github.com/1Shubham7/code-buddy">GitHub</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <button type="button">Log In</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><a href="#home">Coding Buddy</a></p>
            <p><a href="#facb">Find a Coding Buddy</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#community">Community</a></p>
            <p><a href="https://github.com/1Shubham7/code-buddy">GitHub</a></p>
          </div>
          <div className="navbar-menu_container-links-sign">
            <button type="button">Log In</button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}
