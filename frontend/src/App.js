import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import HomePage from "./components/HomePage/Home";
import ProfilePage from "./components/Profile/Profile";
import Users from "./components/FindUsers/FindUsers";



function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(() => {
    document.title = "SOSH";
  }, []);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark", darkTheme);
  };

  return (
    <BrowserRouter>
      <div className={`theme ${darkTheme ? "dark" : ""}`}>
        <Navbar toggleTheme={toggleTheme} />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
            <Route path="users" element={<Users darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>} />
            <Route path="profile" element={<ProfilePage darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
