import React from 'react';
import './footer.css';  
// import logo from "../../assets/footer-logo.svg";
import logo from "../../assets/footer-logo.svg";


function Footer() {
  return (
    <footer className="footer">
        <div className="footer-logo">
        <img src={logo} alt="Kasa logo" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
