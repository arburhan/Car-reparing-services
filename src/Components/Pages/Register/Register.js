import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const [agree, setAgree] = useState();
    const [updateProfile, updating, profileError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { emailVerificationOptions: true });


    const handaleFormSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const yourName = nameRef.current.value;
        // const agree = event.terms.target.checked;
        if (agree) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: yourName });
            alert('Updated profile');
            navigate('/home');

        }
        if (loading) {
            return <Loading></Loading>
        }

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
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="New Password" required />
                    </Form.Group>

                    {/* <p className='text-danger'>{error}</p> */}
                    <input className='me-2 mb-3' onClick={() => { setAgree(!agree) }} type="checkbox" name="terms" id="terms" />
                    <label className={user ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept terms and conditions</label>
                    <Button disabled={!agree} className='w-50 d-block mx-auto' variant="primary" type="Register">
                        Submit
                    </Button>
                </Form>
                <p className='my-4'>Already have an accout? <span onClick={NavigateToLogin} style={{ cursor: 'pointer', fontSize: '18px' }} className='text-danger' >Please log in</span></p>
            </div>
            <Social></Social>
        </div>
    );
};

export default Register;