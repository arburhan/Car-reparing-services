import React from 'react';

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <div className='text-center' >
            Copyrignt &copy; {date} Car Genius
        </div>
    );
};

export default Footer;