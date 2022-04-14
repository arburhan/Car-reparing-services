import React from 'react';
import './Social.css';

const Social = () => {
    return (
        <div>
            <div className="d-flex">
                <div style={{ color: 'gray' }} className='w-50'> <hr /> </div>
                <div className='mt-1 mx-2'>or</div>
                <div style={{ color: 'gray' }} className='w-50'> <hr /></div>
            </div>
            <div className='text-center my-3'>
                <div>
                    <button className="btn border social-btn">Signin with google</button>
                </div>
                <div className='my-3 '>
                    <button className="btn btn-primary  social-btn">Signin with facebook</button>
                </div>
                <div>
                    <button className="btn btn-secondary  social-btn">Signin with github</button>
                </div>
            </div>
        </div>
    );
};

export default Social;