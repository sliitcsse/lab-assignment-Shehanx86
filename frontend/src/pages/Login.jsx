import React, { useState } from "react";
import { userLogin } from "../API/api";

export default function Login() {
    const [credentials, setCredentials] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch(name) {
            case 'email': {
                setCredentials({...credentials, email: value});
                break;
            }
            case 'password': {
                setCredentials({...credentials, password: value});
                break;
            }
            default: {}
        }
    }
    const handeResponse = (res) => {
      if (res.data === "auth fail") {
        alert('Incorrect email or password!');
      } else {
        const { email, role } = res.data;
        localStorage.setItem('email', email);
        localStorage.setItem('role', role);
        window.location.href='/';
      } 
    }

    const handleSubmit = () => {
        userLogin(credentials)
            .then(res => handeResponse(res))
            .catch(error => console.log(error))
    }
    return (
        <>
        <div>
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-success" onClick={handleSubmit}>
              Login
            </button>
            <a href="/signup">Create Profile</a>
          </form>
        </div>
      </>
    ); 
}