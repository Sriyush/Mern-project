import React,{ useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';


function Home() {
  return <div></div>;
}

function Posts() {
  return <div></div>;
}

function Profile() {
  return <div></div>;
}

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(()=>{
    document.title="SOSH";
  }, []);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark", darkTheme);
  };
  return (
    <BrowserRouter>
    <div className={`theme ${darkTheme ? "dark" : ""}`}>
    <Navbar toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
