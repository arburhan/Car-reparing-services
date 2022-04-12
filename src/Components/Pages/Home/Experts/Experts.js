import React, { useEffect, useState } from 'react';
import Expert from './Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('experts.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div className='container-fluid px-5 my-5' >
            <h2 className='text-center py-4 text-primary'>Our Experts</h2>
            <div className='row row-cols-1 row-cols-md-2 g-4 text-center my-5'>
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;