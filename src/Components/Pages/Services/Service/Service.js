import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div>
            <Card style={{ width: '25rem' }}>
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
            </Card>

        </div>
    );
};

export default Service;