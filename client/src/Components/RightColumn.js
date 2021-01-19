import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image from './Images/image1.jpg';
import Displayer from './Displayer';

const RightColumn = () => {
    return (
        <div>
            <Container fluid="lg">

                <Row>
                    <Image src={image} alt="image here" fluid />
                    {/* <Displayer /> */}
                </Row>
            </Container>

        </div>
    )
}

export default RightColumn
