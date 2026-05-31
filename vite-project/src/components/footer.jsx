import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <div className="footer-top">↑ Back to top</div>
      <footer className="footer">
        <div className="footer-links">
          <div><h4>Get to Know Us</h4><a href="#">About Amazon</a><a href="#">Careers</a><a href="#">Press Releases</a></div>
          <div><h4>Connect with Us</h4><a href="#">Facebook</a><a href="#">Twitter</a><a href="#">Instagram</a></div>
          <div><h4>Make Money with Us</h4><a href="#">Sell on Amazon</a><a href="#">Become an Affiliate</a></div>
          <div><h4>Let Us Help You</h4><a href="#">Your Account</a><a href="#">Returns Centre</a><a href="#">Help</a></div>
        </div>
        <div className="footer-language">🌐 English &nbsp;|&nbsp; 🇮🇳 India</div>
      </footer>
      <div className="footer-bottom">© 1996–2026, Amazon.com, Inc. or its affiliates</div>
    </>
  );
}

export default Footer;