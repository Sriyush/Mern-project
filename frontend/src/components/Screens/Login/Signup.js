import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"


function Signup() {
  const navigate = useNavigate()
  const [name,setName] = useState()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result => {
      console.log(result)
      navigate("/login")
    })
    .catch(err=> console.log(err))
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-1/3 h-2/3 shadow-xl bg-slate-200 rounded-xl">
        <h1 className=" text-center text-4xl text-teal-950 mt-5 font-bold">
          Sign Up
        </h1>
        <form className="p-5 text-xl" onSubmit={handleSubmit}>
          <label htmlFor="name" className="block m-2">
            Name
          </label>
          <input
            className="w-full rounded-md p-1"
            type="name"
            id="name"
            // value={email}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="email" className="block m-2">
            Email:
          </label>
          <input
            className="w-full rounded-md p-1"
            type="email"
            id="email"
            // value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button
            type="submit"
            className="border-2  bg-purple-700  p-1.5 rounded-xl text-white mt-5 block mx-auto"
          >
            Register
          </button>
        </form>
        <p className="text-center">
          Already Have an Account <br />
          <Link to="/login" className="text-center">
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
