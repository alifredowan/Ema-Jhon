import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../Hook/firebase-init';

const Shipment = () => {

    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')

    const handleName = e => {
        setName(e.target.value)
    }
    const handleAddress = e => {
        setAddress(e.target.value)
    }
    const handleNumber = e => {
        setNumber(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        const shipping = [name, email, address, number];
        console.log(shipping);
    }
    return (
        <div>
            <div className='log-in-container'>
                <div>
                    <form onSubmit={handleSubmit}>
                        <h3 className='form-title'>Shipping Information</h3>
                        <label htmlFor='name'>Your Name</label>
                        <input onBlur={handleName} type='text' required /><br />
                        <label htmlFor='email'>Your Email</label>
                        <input value={user?.email} readOnly type='email' required /><br />
                        <label htmlFor='address'>Your Address</label>
                        <input onBlur={handleAddress} type='text' required /><br />
                        <label htmlFor='address'>Your Number</label>
                        <input onBlur={handleNumber} type='number' required /><br />
                        <button className='btn' type="submit" >Add Shipping</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Shipment;