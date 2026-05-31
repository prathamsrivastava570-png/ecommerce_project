import React from 'react';
import './header.css';

function Header({ cartCount, searchQuery, onSearchChange, onSearch, onCartClick, isLoggedIn, onLoginClick, onLogout }) {
  return (
    <header className="header">
      <div className="logo">amazon</div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Amazon"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
        />
        <button onClick={onSearch}>Search</button>
      </div>
      {isLoggedIn ? (
        <div className="logout" onClick={onLogout}>👤 Sign Out</div>
      ) : (
        <div className="signin-btn" onClick={onLoginClick}>👤 Sign In</div>
      )}
      <div className="cart" onClick={onCartClick}>🛒 Cart ({cartCount})</div>
    </header>
  );
}

export default Header;