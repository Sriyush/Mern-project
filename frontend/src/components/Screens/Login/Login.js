import { useState } from "react";
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Type from "../../widgets/Type";


function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {email, password})
      .then((result) => {
        console.log(result);
        if(result.data.status === 'success'){
          localStorage.setItem('userId', result.data.user._id);
          localStorage.setItem('username',result.data.user.username);
          navigate('/home')
          alert(result.data)
        }else{
          alert(result.data)
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="flex flex-row text-center mb-5">
        <h1 className="text-4xl text-teal-950 font-bold" style={{ color: "#6F38C5" }}>SOSH</h1>
        <h1 className="text-4xl text-teal-950 font-bold"> - </h1>
        <h1 className="text-4xl text-teal-950 font-bold"> <Type/></h1>
      </div>
      <div className="w-1/3 h-1/2 shadow-xl bg-slate-200 rounded-xl">
        <h1 className=" text-center text-4xl text-teal-950 mt-5 font-bold">
          Login
        </h1>
        <form className="p-5 text-xl" onSubmit={handleSubmit}>
          <label htmlFor="email" className="block m-2">
            Email:
          </label>
          <input
            className="w-full rounded-md p-1"
            type="email"
            id="email"
            // value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="block m-2">
            Password:
          </label>
          <input
            className="w-full rounded-md p-1"
            type="password"
            id="password"
            // value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            type="submit"
            className="border-2 bg-purple-700 p-1.5 rounded-xl text-white mt-5 block mx-auto"
          >
            Log In
          </button>
        </form>
        <p className="text-center">
          Don't have an account? <br />
          <Link to="/signup" className="text-center">
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login
