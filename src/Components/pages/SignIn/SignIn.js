import { Button } from '../../Button';
import './SignIn.css';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useEffect } from 'react';

const SignIn = () => {
    const {
        user,
        error,
        setIsLogin,
        handleEmailChange,
        handlePasswordChange,
        handleForm,
        handleResetPassword,
        signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/sign-in';

    console.log(location.state);

    const handleGoogleLogin = () => {
        signInUsingGoogle().then((response) => { history.push(redirect_uri); })
    }
    useEffect(() => {
        if (user.email) {
            history.push(redirect_uri);
        }
    }, [history, redirect_uri, user.email]);


    return (
        <div className="signin">
            <section className='signin-container'>
                <h2 className='signin-heading'>
                    Sign In
                </h2>
                <form onSubmit={handleForm} >
                    <div className='input-area'>
                        <input
                            onBlur={handleEmailChange}
                            className='signin-input'
                            name='email'
                            type='email'
                            placeholder='Put E-mail'
                            required
                        />
                        <input
                            onBlur={handlePasswordChange}
                            className='signin-input'
                            name='password'
                            type='password'
                            placeholder='Put password'
                            required
                        />
                        <p style={{ margin: "2px" }} className="row mb-3 text-danger">{error}</p>
                        <Button onClick={() => setIsLogin(true)} buttonSize='btn--medium' buttonColor='blue'>Sign In</Button>
                        <Link style={{ textDecoration: "none", marginBottom: "14px" }} to='/sign-up'>
                            <Button buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black' > Dont have Account?</Button>
                        </Link>
                        <Button onClick={handleResetPassword} buttonSize='btn--medium' buttonColor='blue'>Reset Password</Button>
                    </div>
                </form>
            </section >
            <section className="signin-container">
                <div className='input-area-btn'>
                    <h2 className='signin-heading'>
                        Sign In with</h2>
                    <Button onClick={handleGoogleLogin} buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black'><AiFillGoogleCircle className='auth-icons' /> Sign In With Google</Button>
                </div>
            </section>
        </div >
    );
};

export default SignIn;