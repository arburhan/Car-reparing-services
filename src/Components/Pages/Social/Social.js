import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './Social.css';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signinWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    const [signinWithFacebook, userFb, loadingFb, errorFb] = useSignInWithFacebook(auth);
    const navigate = useNavigate();

    const googleSignIn = () => {
        signInWithGoogle();
    }
    const facebookSignIn = () => {
        facebookSignIn();
    }
    const githubSignIn = () => {
        signinWithGithub();
    }
    if (loading || loadingFb || loadingGit) {
        return <Loading></Loading>;
    }
    let errorMsg;
    if (error || errorGit || errorFb) {
        errorMsg = <div>
            <p className='text-danger' >Error: {error?.message} {errorGit?.message} {errorFb?.message}</p>
        </div>
    }
    if (user || userGit || userFb) {
        navigate('/home');
    }
    return (
        <div>
            <div className="d-flex">
                <div style={{ color: 'gray' }} className='w-50'> <hr /> </div>
                <div className='mt-1 mx-2'>or</div>
                <div style={{ color: 'gray' }} className='w-50'> <hr /></div>
            </div>
            {errorMsg};
            <div className='text-center my-3'>
                <div>
                    <button onClick={() => { googleSignIn() }} className="btn border social-btn">Signin with google</button>
                </div>
                <div className='my-3 '>
                    <button onClick={() => { facebookSignIn() }} className="btn btn-primary  social-btn">Signin with facebook</button>
                </div>
                <div>
                    <button onClick={() => { signinWithGithub() }} className="btn btn-secondary  social-btn">Signin with github</button>
                </div>
            </div>
        </div>
    );
};

export default Social;