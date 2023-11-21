import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import Type from "../../widgets/Type";


function Signup() {
  const navigate = useNavigate()
  const [name,setName] = useState()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios
      .post(`${process.env.REACT_APP_API_URL}/register`, {
        name,
        email,
        password,
        username,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="flex justify-center flex-col items-center w-screen h-screen">
      <div className="flex flex-row text-center mb-5">
        <h1 className="text-4xl text-teal-950 font-bold" style={{ color: "#6F38C5" }}>SOSH</h1>
        <h1 className="text-4xl text-teal-950 font-bold"> - </h1>
        <h1 className="text-4xl text-teal-950 font-bold"> <Type/></h1>
      </div>
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
          <label htmlFor="username" className="block m-2">
            Username
          </label>
          <input
            className="w-full rounded-md p-1"
            type="username"
            id="username"
            // value={email}
            required
            onChange={(e) => {
              setUsername(e.target.value);
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
