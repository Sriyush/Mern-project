import "./NavbarStyles.css";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import {
    IconButton,
  } from "@mui/material";
  import {
    DarkMode,
    LightMode,
  } from "@mui/icons-material";
  import Logo from './../../../assets/{s}.png'
export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    navigate("/login", { replace: true });
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const [mode, setMode] = useState('light');

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  
    if (newMode === 'light') {
      document.documentElement.style.setProperty('--bg-color', '#fff');
      document.documentElement.style.setProperty('--text-color', '#000');
      document.documentElement.style.setProperty('--icon-color', '#000');
      document.documentElement.style.setProperty('--bg-color-light', '#fff');
    } else {
      document.documentElement.style.setProperty('--bg-color', '#000');
      document.documentElement.style.setProperty('--text-color', '#fff');
      document.documentElement.style.setProperty('--icon-color', '#fff');
      document.documentElement.style.setProperty('--bg-color-light', '#000');
    }
    
    document.body.classList.toggle('light-theme', newMode === 'light');
    document.body.classList.toggle('dark-theme', newMode === 'dark');
  };
  

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/home" className="logo-container">
        <img src={Logo} alt="logo" sizes="15x15" className="logo" />
        <h1 className="text-4xl text-850 font-bold text-center">SOSH</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/home" className="hoverElement">Home</Link>
        </li>

        <li>
          <Link to="/users" className="hoverElement">Find Users</Link>
        </li>

        <li>
          <Link to="/profile" className="hoverElement">Profile</Link>
        </li>
        <li>
          <Link to="/login" onClick={handleLogout} className="hoverElement">
            Logout
          </Link>
        </li>
        <li>
          <IconButton onClick={toggleMode} class="icon" >
            {mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
    </div>
  );
};