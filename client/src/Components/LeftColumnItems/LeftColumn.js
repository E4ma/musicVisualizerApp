import React from 'react';
import { Button, Card, ListGroup, Nav, Overlay } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Audio from './Audio';
import Background from './Background';
import Icon from './Icon';
import Text from './Text';
import Export from './Export';
import Save from './Save';

const LeftColumn = (props) => {
    return (

        <div>

            <Card style={{ width: '20rem' }}>
                {/* <Card.Header>Featured</Card.Header> */}
                <Router>
                    <ListGroup variant="flush">
                        <Card.Body>

                            <ListGroup.Item>

                                <Nav.Link href="/Audio">
                                    <Button className="ui secondary button">Audio </Button>
                                </Nav.Link>


                            </ListGroup.Item>


                            <ListGroup.Item>
                                <Nav.Link href="/Background">
                                    <Button className="ui secondary button">Background </Button>
                                </Nav.Link>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Nav.Link href="/Icon">
                                    <Button className="ui secondary button">Icon </Button>
                                </Nav.Link>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Nav.Link href="/Text">
                                    <Button className="ui secondary button">Text </Button>
                                </Nav.Link>
                            </ListGroup.Item>

                            <ListGroup.Item>

                                <Button href="/Export" className="ui secondary button">Export </Button>
                                <Button href="/Save" className="ui secondary button">Save </Button>

                            </ListGroup.Item>

                        </Card.Body>
                    </ListGroup>


                    <Switch>
                        <Route path="/Audio" exact component={Audio} />

                        <Route path="/Background">
                            <Background />
                        </Route>

                        <Route path="/Icon" exact component={Icon} />
                        <Route path="/Text" exact component={Text} />
                        <Route path="/Export" exact component={Export} />
                        <Route path="/Save" exact component={Save} />


                    </Switch>
                    {/* 
                    <Grid.Column >
                        <Image src={props.children} alt='' />

                    </Grid.Column> */}

                </Router>


            </Card>


        </div >

    )
}


export default LeftColumn
