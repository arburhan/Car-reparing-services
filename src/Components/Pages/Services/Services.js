import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useServices();
    return (
        <div className='my-5'>
            <h2 className='text-center my-3'>Our Services</h2>
            <div className='row row-cols-1 row-cols-md-3 container-fluid mx-auto g-4'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

        </div>

    );
};

export default Services;