import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    const navigate = useNavigate();

    const handaleServiceDetails = id => {
        navigate(`/services/${id}`)

    }
    return (
        <div>
            <Card>
                <Card.Img className='img-fluid' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className="fs-4">
                        Price: {price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center bg-transparent'>
                    <Button onClick={() => handaleServiceDetails(id)} variant="primary">Book {name}</Button>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default Service;