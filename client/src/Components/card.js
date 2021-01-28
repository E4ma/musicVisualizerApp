import React from "react";
import { Container, ButtonGroup, Jumbotron, Button } from "react-bootstrap";
import Displayer from "./Displayer";

//Card that will map into multiple on templates

const styles = {
    title: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '2rem',
        height: '2rem',
    },
    cardBody: {
        position: 'relative'
    },
    button: {
        position: 'absolute',
        width: '80%',
        bottom: '2%',
        left: '10%',
    },
    cardText: {
        fontSize: '1.2rem',
        fontStyle: 'italic'
    }
};

const Card = () => {
    return (
        <>
            {/* each card has name of visualizer & edit button to take user to page that allows user edit visualizer to his liking */}
            <Jumbotron fluid>
                <Container>
                    <h1 style={styles.title}>Visual Name</h1>
                    <Displayer style={styles.cardBody} />
                    <Button variant="secondary">Edit</Button>
                </Container>
            </Jumbotron>
        </>
    )
};

export default Card;
