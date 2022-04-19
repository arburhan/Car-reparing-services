import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequerAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    if (!user.emailVerified) {
        return <div className="text-danger text-center">
            <h3>Your email isn't verify</h3>
            <p>Please verify your email first</p>
            <button className='rounded-pill px-3 py-1 text-dark' onClick={async () => {
                await sendEmailVerification();
                alert('mail sent');

            }} >Send mail again</button>
        </div>
    }

    return children;
};

export default RequerAuth;