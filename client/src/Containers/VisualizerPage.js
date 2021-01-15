import React from 'react'
import { Container, Grid, Button, Image } from 'semantic-ui-react'

const VisualizerPage = (props) => {
    return (
        <Container style={{ margin: 10 }}>
            {/* <div style={{ margin: 20 }}>Navbar</div> */}

            <Container >
                <Grid colummns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <div>
                                <Button circular>Audio</Button>
                            </div>
                            <br />
                            <div>
                                <Button circular>Background</Button>
                            </div>
                            <br />
                            <div>
                                <Button circular>Icon</Button>
                            </div>
                            <br />
                            <div>
                                <Button circular>Text</Button>
                            </div>
                            <br />
                            <div>
                                <Button.Group>
                                    <Button>Export</Button>
                                    <Button.Or />
                                    <Button positive >Save</Button>
                                </Button.Group>
                            </div>

                        </Grid.Column>

                        <Grid.Column >
                            <Image src={props.children} alt='' />

                        </Grid.Column>

                    </Grid.Row>

                </Grid>
            </Container>

        </Container>
    )
}

export default VisualizerPage
