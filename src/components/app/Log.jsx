import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

const Log = ({title, name, description, servings, calories, meal}) => {
    return (
        <>
            <Container>
                <Row>
                    <Col><h1>{title}</h1></Col>
                </Row>
                <Row>
                    <Col>Ingredient:</Col>
                    <Col>{name}</Col>
                </Row>
                <Row>
                    <Col>Description:</Col>
                    <Col>{description}</Col>
                </Row>
                <Row>
                    <Col>Servings:</Col>
                    <Col>{servings}</Col>
                </Row>
                <Row>
                    <Col>Calories:</Col>
                    <Col>{calories}</Col>
                </Row>
                <Row>
                    <Col>Meal ID:</Col>
                    <Col>{meal}</Col>
                </Row>
                <Button>Edit Food</Button>
            </Container>
        </>
    );
};

export default Log;



