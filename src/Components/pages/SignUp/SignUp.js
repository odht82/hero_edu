import React, { useEffect } from 'react';
import { Button } from '../../Button';
import './SignUp.css';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const {
    user,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleForm,
    error,
    signInUsingGoogle
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/sign-up';

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => { history.push(redirect_uri); })
  }
  useEffect(() => {
    if (user.email) {
      history.push(redirect_uri);
    }
  }, [history, redirect_uri, user.email]);
  return (
    <div className="signup">
      <section className='signup-container'>
        <h2 className='signup-heading'>
          Sign Up
        </h2>
        <form onSubmit={handleForm} >
          <div className='input-area'>
            <input
              onBlur={handleNameChange}
              className='signup-input'
              name='name'
              type='text'
              placeholder='your name'
            />
            <input
              onBlur={handleEmailChange}
              className='signup-input'
              name='email'
              type='email'
              placeholder='Put E-mail'
            />
            <input
              onBlur={handlePasswordChange}
              className='signup-input'
              name='password'
              type='password'
              placeholder='Put password'
            />
            <input
              className='signup-input'
              name='confirm-password'
              type='password'
              placeholder='Confirm Password'
            />
            <p style={{ margin: "2px" }} className="row mb-3 text-danger">{error}</p>
            <Button
              style={{ textDecoration: "none", margin: "7px" }}
              buttonSize='btn--medium'
              buttonColor='blue'>Sign Up</Button>
            <Link style={{ textDecoration: "none" }} to='/sign-in'>
              <Button buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black' > Already have Account?</Button>
            </Link>
          </div>
        </form>
      </section>
      <section className="signup-container">
        <div className='input-area-btn'>
          <h2 className='signup-heading'>
            Sign Up with</h2>
          <Button onClick={handleGoogleLogin} buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black'><AiFillGoogleCircle className='auth-icons' /> Sign Up With Google</Button>
        </div>
      </section>
    </div>
  );
};

export default SignUp;