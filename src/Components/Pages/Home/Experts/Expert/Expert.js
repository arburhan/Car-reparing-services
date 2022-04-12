import React from 'react';
import { Button, CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

const Expert = ({ expert }) => {
    const { name, image } = expert;
    return (
        <div>
            <Card className='d-flex align-items-center py-3 border-0 shadow'>
                <Card.Img className='img-fluid' style={{ height: '150px', width: '150px', borderRadius: '50%' }} src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='bg-transparent border-0'>
                    <Button variant="primary">View Details</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Expert;