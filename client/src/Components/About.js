import React from 'react'
import { Container, Card, Button } from "react-bootstrap";
// import Displayer from './Displayer'


// styling for About is in App.css

const About = () => {
    return (
        <div>
            <Container>
                <Card className="text-center">
                    <Card.Img variant="top" src="a100px180" />
                    <Card.Body>
                        <Card.Title>
                            <h2>Turn your music into a killer video</h2>
                        </Card.Title>
                        <Card.Text>
                            <h4>No download needed. Jump into the web based editor and start customizing right away. The live video preview updates in real time and moves with your music.</h4>
                            <br></br>
                            <h4>It only takes a few minutes to make a video. Use simple pre-set controls to enjoy your tracks</h4>

                        </Card.Text>
                        {/* <Displayer /> */}
                        {/* <Button variant="primary">To Home Page</Button> */}
                    </Card.Body>
                </Card>
            </Container>
        </div >
    )
}

export default About


// const About = () => {
//     return (
//         <div className="ui container Abountscr">
//             <br></br>
//             <h2>Turn your music into a killer video.</h2>
//             <br></br>
//             <h4>
//                 We make it fast and easy to create custom music visualizers. You're one step closer to entertaining your audience with self made videos.
//             </h4>
//             <br></br>
//             <h4>
//                 No download needed. Jump into the web based editor and start customizing right away. The live video preview updates in real time and moves with your music.
//                 It only takes a few minutes to make a video. Use simple pre-set controls to enjoy your tracks
//             </h4>
//         </div>
//     )
// }

// export default About
