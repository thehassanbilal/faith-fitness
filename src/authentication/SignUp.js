/** @format */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../src/authentication/auth.css';
import { signupData, signupThunk } from '../features/authSlice/authSlice';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const userData = useSelector(signupData);
  console.log(userData);
  const dispatch = useDispatch();

  const signupHandler = (e) => {
    e.preventDefault();

    console.log(username, email, password);
    dispatch(
      signupThunk({ username: username, email: email, password: password })
    );
  };

  return (
    <>
      <div className='signup-form'>
        <form>
          <div className='form-header'>
            <h2>Sign Up</h2>
            <p>Fill out this form to start your free trial!</p>
          </div>
          <div className='form-group'>
            <label>Username</label>
            <input
              type='text'
              className='form-control'
              value={username}
              name='username'
              onChange={(e) => setUsername(e.target.value)}
              required='required'
            />
          </div>
          <div className='form-group'>
            <label>Email Address</label>
            <input
              type='email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required='required'
              name='email'
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Confirm Password</label>
            <input
              type='password'
              className='form-control'
              name='confirm_password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required='required'
            />
          </div>
          <div className='form-group'>
            <label className='form-check-label'>
              <input type='checkbox' required='required' /> I accept the
              <a href='#'>Terms of Use</a> &amp; <a href='#'>Privacy Policy</a>
            </label>
          </div>
          <div className='form-group'>
            <button
              onClick={signupHandler}
              type='submit'
              className='btn btn-primary btn-block btn-lg'
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className='text-center small already-account'>
          Already have an account? <Link to='/signin'>Login here</Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;
