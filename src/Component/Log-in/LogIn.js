import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from './../../Hook/firebase-init';
import { useState } from 'react';
const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    if (user) {
        navigate("/shop")
    }
    const handleSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='log-in-container'>
            <div>
            <form onSubmit={handleSubmit}>
            <h3 className='form-title'>Log-in</h3>
            <label htmlFor='email'>Email</label>
            <input onBlur={handleEmail} type='email' required/><br/>
            <label htmlFor='password'>Password</label>
            <input onBlur={handlePassword} type='password' required/><br/>
            <p style={{color:"red"}}>{error?.message}</p>
            {loading && <p>Loading...</p>}
            <button className='btn' type="submit" >Log-in</button>
            </form>
            <p>
                New to ema-jhon ? <Link to="/singup">Create Account</Link>
            </p>
            </div>
        </div>
    );
};

export default LogIn;