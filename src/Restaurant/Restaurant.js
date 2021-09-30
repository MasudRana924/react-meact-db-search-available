import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Restaurant = (props) => {
    const{strMeal,strInstructions,strMealThumb}=props.meal
    return (
        <Col  >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                      {strInstructions.slice(0,20)}
                    </Card.Text>
                    <Button variant="primary">See Details</Button>
                </Card.Body>
            </Card>

        </Col>
    );
};

export default Restaurant;