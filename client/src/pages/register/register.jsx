import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const register = async (e) => {
    e.preventDefault();

    try {
        const registerData = {
            username,
            password,
            passwordVerify,
        };

        await axios.post("http://localhost:8800/register", registerData);
    } catch (err) {
        console.error(err);
    }
  }

  return (
    <div>
        <h1>Student Housing Application</h1>
        <form onSubmit={register}>
            <label>
                Username:
            </label>
            <input 
                type="text"
                name="name"
                placeholder="username"
                onChange={ (e) => setUsername(e.target.value) }
                value={username}
            />
            <label>
                Password:
            </label>
            <input 
                type="password" 
                name="password" 
                placeholder="password"
                onChange={ (e) => setPassword(e.target.password) }
                value={password}
            />
            <label>
                Verify Password:
            </label>
            <input type="password" name="passwordVerify" placeholder="verify password" />
            <input type="submit" value="Register" />
            <a href="https://google.com">
                <label>
                    Forgot Password
                </label>
            </a>
            
        </form>
    </div>
  )
}

export default Register;