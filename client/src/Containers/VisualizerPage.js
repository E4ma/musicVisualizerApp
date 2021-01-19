import React, { useState } from 'react'
import AudioComponent from '../Components/LeftColumnItems/Audio'
import DisplayerComponent from '../Components/RightColumnItems/displayer'
import { Container, Grid, Button } from 'semantic-ui-react'

const VisualizerPage = (props) => {
  const [backgroundColor, setBackgroundColor] = useState('#282c34')
  return (
    <Container style={{ margin: 10 }}>
      {/* <div style={{ margin: 20 }}>Navbar</div> */}

      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <div>
                <Button circular>
                  <AudioComponent />
                </Button>
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
                  <Button positive>Save</Button>
                </Button.Group>
              </div>
            </Grid.Column>
            <Grid.Column
              style={{ backgroundColor: backgroundColor }}
              width={12}
            >
              <DisplayerComponent />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row></Grid.Row>
        </Grid>
      </Container>
      <Container>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Container>
  )
}

export default VisualizerPage
