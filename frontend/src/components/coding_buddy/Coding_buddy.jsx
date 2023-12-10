import React, { useState, useEffect } from 'react';
import './coding_buddy.css';

export default function Codingbuddy() {
  const [dynamicText, setDynamicText] = useState('');
  const phrases = ["Find your Coding Buddy", "Participate in Hackathons, Competitions and events together", "Build projects together and get hired"];

  useEffect(() => {
    let i = 0;
    let j = 0;
    let isDeleting = false;

    const loop = () => {
      setDynamicText((prevText) => {
        const currentPhrase = phrases[i];
        let newText = isDeleting
          ? currentPhrase.substring(0, j - 1)
          : currentPhrase.substring(0, j + 1);

        j = isDeleting ? j - 1 : j + 1;

        if (isDeleting && j === 0) {
          isDeleting = false;
          i = (i + 1) % phrases.length;
        }

        if (!isDeleting && j === currentPhrase.length + 1) {
          isDeleting = true;
        }

        return newText;
      });

      const speed = isDeleting ? 50 : 150;

      setTimeout(loop, speed);
    };

    loop();
  }, []);

  return (
    <div className="website-head">
      <div className="image-container">
        <div className="image-div">
          <div className="main-text">
            <p id="tt">
              {dynamicText}
              <span className="fake-cursor">|</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
