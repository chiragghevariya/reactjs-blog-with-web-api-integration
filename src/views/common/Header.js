import React from 'react';

function Header() {
  return (
     
    <header id="header" className="fixed-top header-inner-pages">
    <div className="container d-flex align-items-center">
      <h1 className="logo mr-auto"><a href="/">Tempo</a></h1>
        <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li className="active"><a href="/blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>
      </nav>

    </div>
  </header>
  );
}

export default Header;
