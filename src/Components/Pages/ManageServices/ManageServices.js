import React from 'react';
import useServices from '../../Hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();
    const handleDelete = id => {
        const procced = window.confirm('Are you sure');
        if (procced) {
            const url = `https://nameless-savannah-98314.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining);
                })

        }
    }
    return (
        <div>
            <h2>this is managing comittee manager room and managing services :)</h2>
            {
                services.map(service => <div key={service._id}> <h4>{service.name} <button onClick={() => { handleDelete(service._id) }}>X</button> </h4> </div>)
            }
        </div>
    );
};

export default ManageServices;