import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handaleFormSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const NavigateToRegister = () => {
        navigate('/register');
    }
    return (
        <div className='container mx-auto w-50'>
            <h2 className='text-center text-primary mt-4' >Log in</h2>
            <div>
                <Form onSubmit={handaleFormSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p className='my-4'>New on Genius Car? <span onClick={NavigateToRegister} style={{ cursor: 'pointer', fontSize: '18px' }} className='text-danger' >Please Register</span></p>
            </div>
            <Social></Social>
        </div>
    );
};

export default Login;