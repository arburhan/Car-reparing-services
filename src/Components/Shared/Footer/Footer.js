import React from 'react';

const Footer = () => {
    let date =  new Date().getFullYear();
    return (
        <div>
            Copyrignt &copy; {date}
        </div>
    );
};

export default Footer;