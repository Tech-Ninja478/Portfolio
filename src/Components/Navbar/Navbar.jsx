import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id, menuName) => {
    setMenu(menuName);
    
    // If we are already on home, just scroll
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we are on Experience page, go home first then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="navbar">
      <Link to="/" onClick={() => handleNavClick('home', 'home')}>
        <img src={logo} alt="logo" width={200} />
      </Link>

      <ul className="nav-menu">
        <li onClick={() => handleNavClick('home', 'home')}>
          <p>Home</p>
          {menu === "home" && <img src={underline} alt="" />}
        </li>
        <li onClick={() => handleNavClick('about', 'about')}>
          <p>About Me</p>
          {menu === "about" && <img src={underline} alt="" />}
        </li>
        <li onClick={() => { navigate("/experience"); setMenu("experience"); }}>
          <p>Experience</p>
          {menu === "experience" && <img src={underline} alt="" />}
        </li>
        <li onClick={() => handleNavClick('work', 'work')}>
          <p>Portfolio</p>
          {menu === "work" && <img src={underline} alt="" />}
        </li>
        <li onClick={() => handleNavClick('contact', 'contact')}>
          <p>Contact</p>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>

      <div className="nav-connect" onClick={() => handleNavClick('contact', 'contact')}>
        Connect With Me
      </div>
    </div>
  );
};

export default Navbar;