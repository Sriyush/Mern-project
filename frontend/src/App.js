import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/widgets/Navbar/Navbar';
import HomePage from "./components/Screens/HomePage/Home";
import ProfilePage from "./components/Screens/Profile/Profile";
import Users from "./components/Screens/FindUsers/FindUsers";
import Login from "./components/Screens/Login/Login";
import Signup from "./components/Screens/Login/Signup";



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
    <>
      <BrowserRouter>
        <div className={`theme ${darkTheme ? "dark" : ""}`}>
          <div className="content">
            <Routes>
              <Route 
              path ="/"
              element={<Signup />} 
              />

              <Route
                path="login"
                element={
                  <Login darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                }
              />
              <Route
                path="signup"
                element={
                  <Signup darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                }
              />
              <Route
                path="home"
                element={
                  <HomePage darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                }
              />

              <Route
                path="users"
                element={
                  <Users darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                }
              />
              <Route
                path="profile"
                element={
                  <ProfilePage
                    darkTheme={darkTheme}
                    setDarkTheme={setDarkTheme}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;