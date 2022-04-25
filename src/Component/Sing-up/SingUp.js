import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react"
import auth from './../../Hook/firebase-init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const SingUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setComfirmPassword] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate()
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = e => {
        setComfirmPassword(e.target.value)
    }
    if(user){
        navigate("/shop")
    }
    const handleSingUp = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return
        }
        if (password.length < 6) {
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='log-in-container'>
        <div>
        <h3 className='form-title'>Sing Up</h3>
        <form onSubmit={handleSingUp}>
        <label htmlFor='email'>Email</label>
        <input onBlur={handleEmail} type='email' required/><br/>
        <label htmlFor='password'>Password</label>
        <input onBlur={handlePassword} type='password' required/><br/>
        <label htmlFor='confirm-password'>Confirm-Password</label>
        <input onBlur={handleConfirmPassword} type='password' required/><br/>
        <button className='btn' type="submit" >Sing Up</button>
        </form>
        <p>
            Already Have an Account ? <Link to="/login">Log In</Link>
        </p>
        </div>
        
        </div>
    );
};

export default SingUp;