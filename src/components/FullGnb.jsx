import { useState, useEffect } from 'react';

function FullGnb({ isMenuOpen, handleMenuClose }) {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('noscroll');
    } else {
      document.body.classList.remove('noscroll');
    }
    return () => {
      document.body.classList.remove('noscroll');
    };
  }, [isMenuOpen]);

  return (
    <div className={`full_gnb ${isMenuOpen ? 'active' : ''}`}>
      <div className="gnb_inner">
        <ul className="menu_list">
          <li><a href="#aboutme" onClick={handleMenuClose}>ABOUT ME</a></li>
          <li><a href="#projects" onClick={handleMenuClose}>PROJECTS</a></li>
          <li><a href="#skills" onClick={handleMenuClose}>SKILLS</a></li>
          <li><a href="#contact" onClick={handleMenuClose}>CONTACT</a></li>
        </ul>
      </div>
    </div>
  );
}

export default FullGnb;
