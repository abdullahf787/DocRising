import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {

    const [credentials, setCredentials] = useState({email: "", password: ""}) 


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            alert("valid credentials");
            localStorage.setItem('token', json.authtoken); 

        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
      <div className="formCenter">
        <form className="formFields" onSubmit={handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={credentials.email} onChange={onChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={credentials.password} onChange={onChange}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton" type="submit">Sign In</button>{" "}
            <Link to="/sign-up" className="formFieldLink">
              Create an account
            </Link>
          </div>

          
      </form>
      </div>
    );
  }


export default SignInForm;
