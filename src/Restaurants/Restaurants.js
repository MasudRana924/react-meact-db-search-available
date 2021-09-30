import React, { useEffect, useState } from 'react';
import { Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap';
import Restaurant from '../Restaurant/Restaurant';
import './Restaurant.css'

const Restaurants = () => {
    const [meals, setMeals] = useState([])
    const [searchValue, setSearch] = useState('')
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchValue])
    const handleSearch = event => {
        const searchText = event.target.value
        setSearch(searchText)
    }
    return (

        <Container fluid>

            <InputGroup onChange={handleSearch} className="mt-1 mb-3 w-50 mx-auto">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Button
                </Button>
            </InputGroup>
            <Row xs={1} md={4} className="g-4">

                {
                    meals.map(meal => <Restaurant
                        meal={meal}
                    ></Restaurant>)
                }



            </Row>
        </Container>
    );
};

export default Restaurants;