import React, { useState } from "react";
import { createProfile } from "../API/api";

export default function CreateProfile() {
    const [profile, setProfile] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch(name) {
            case 'name': {
                setProfile({...profile, name: value});
                break;
            }
            case 'email': {
                setProfile({...profile, email: value});
                break;
            }
            case 'role': {
                setProfile({...profile, role: value});
                break;
            }
            case 'password': {
                setProfile({...profile, password: value});
                break;
            }
            default: {}
        }
    }

    const handleResponse = (res) => {
      if (res.data === "User already exists!") {
        alert("User already exists with this email address!");
      } else {
        const { email, role } = res.data;
        localStorage.setItem('email', email);
        localStorage.setItem('role', role);
        window.location.href='/';
      }

    }

    const handleSubmit = () => {
        createProfile(profile)
            .then(res => handleResponse(res))
            .catch(error => console.log(error))
    }
    return (
        <>
        <div>
          <form>
          <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                onChange={handleChange}
              />
            </div>
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
            <div className="form-group">
              <label>Role: </label>
              Customer
              <input
                value="Customer"
                name="role"
                type="radio"
                onChange={handleChange}
              />
              Trader
              <input
                value="Trader"
                name="role"
                type="radio"
                onChange={handleChange}
              />
            </div>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </>
    ); 
}