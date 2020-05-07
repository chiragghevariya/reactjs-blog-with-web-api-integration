import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
     
    <header id="header" className="fixed-top header-inner-pages">
    <div className="container d-flex align-items-center">
      <h1 className="logo mr-auto"><Link to="/">Tempo</Link></h1>
        <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#services">Services</Link></li>
          <li><Link to="#portfolio">Portfolio</Link></li>
          <li><Link to="#team">Team</Link></li>
          <li className="active"><Link to="/blog">Blog</Link></li>
          <li><Link to="#contact">Contact</Link></li>

        </ul>
      </nav>

    </div>
  </header>
  );
}

export default Header;
