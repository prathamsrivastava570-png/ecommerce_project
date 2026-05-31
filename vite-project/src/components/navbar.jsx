import React from 'react';
import './Navbar.css';

const categories = ['All','Mobiles','Electronics','Fashion','Home','Deals'];

function Navbar({ activeCategory, onCategoryClick }) {
  return (
    <nav className="navbar">
      {categories.map((cat) => (
        <span
          key={cat}
          className={`nav-link ${activeCategory === cat ? 'active' : ''}`}
          onClick={() => onCategoryClick(cat)}
        >
          {cat}
        </span>
      ))}
    </nav>
  );
}

export default Navbar;