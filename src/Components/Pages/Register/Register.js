import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const ConfirmPasswordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handaleFormSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = ConfirmPasswordRef.current.value;
        createUserWithEmailAndPassword(email, password);

        // if (email !== confirmPassword) {
        //     console.log(email, password, confirmPassword);
        //     setError('password and confirmpassword not match');
        //     return;
        // }

    }
    const navigate = useNavigate();
    const NavigateToLogin = () => {
        navigate('/login');

    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-primary mt-4'>Register</h2>
            <div>
                <Form onSubmit={handaleFormSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="New Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control ref={ConfirmPasswordRef} type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    {/* <p className='text-danger'>{error}</p> */}
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="accept terms and conditions" />
                    </Form.Group>
                    <Button className='w-50 d-block mx-auto' variant="primary" type="Register">
                        Submit
                    </Button>
                </Form>
                <p>Already have an accout? <span onClick={NavigateToLogin} style={{ cursor: 'pointer', fontSize: '18px' }} className='text-danger' >Please log in</span></p>
            </div>
        </div>
    );
};

export default Register;