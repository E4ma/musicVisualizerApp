import { Button, Card, ListGroup, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Audio from '../Components/LeftColumnItems/Audio';
import Background from '../Components/LeftColumnItems/Background';

const LeftColumn = () => {
    return (

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
                            <Button className="ui secondary button">Icon </Button>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button className="ui secondary button">Text </Button>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button className="ui secondary button">Export </Button>
                            <Button className="ui secondary button">Save </Button>
                        </ListGroup.Item>

                    </Card.Body>
                </ListGroup>


                <Switch>
                    <Route path="/Audio" exact component={Audio} />
                    {/* <Audio />
                    </Route> */}
                    <Route path="/Background">
                        <Background />
                    </Route>
                </Switch>

            </Router>


        </Card>


    )
}

export default LeftColumn
