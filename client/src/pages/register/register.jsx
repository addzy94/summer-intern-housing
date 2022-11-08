import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
        <h1>Student Housing Application</h1>
        <form action="POST">
            <label>
                Username:
            </label>
            <input type="text" name="name" />
            <label>
                Password:
            </label>
            <input type="password" name="password" />
            <label>
                Verify Password:
            </label>
            <input type="password" name="passwordVerify" />
            <Link to="/landing">
                <input type="submit" value="Submit" />
            </Link>
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