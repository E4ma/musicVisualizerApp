import React from 'react'
import './Profile.css'
import { Row, Col } from 'react-bootstrap'

const styles = {
    root: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "105px",
        marginTop: "105px",
        background: "antiquewhite",
        padding: "100px",
        fontSize: "1.5rem",
        borderRadius: "20px",
        backgroundColor: "#357E85"
    },
    labelText: {
        fontFamily: "Roboto",
        fontSize: "2rem",
        color: "#CCEBF4",
    }
  }

const Profile = ({user}) => {
    return (
        <div style={styles.root}  >
            <div className='center' style={styles.labelText}>
            <Row>
                <Col> <label className='pr-3'>ID:</label> </Col> 
                <Col><div>{user.id}</div></Col>
            </Row>
            <Row>
                <Col> <label className='pr-3'> Name:</label> </Col> 
                <Col><div>{user.name}</div></Col>
                <Col><div>{user.picture}</div></Col>
            </Row>
            <Row>
                <Col> <label className='pr-3'> email:</label></Col>       
                <Col>{user.email}</Col>
            </Row>
            <Row>
                {/* for the saved visualizer */}
                <Col>  <label  className='pr-3'> Saved Visualizers:</label></Col>       
                <Col>{user.entries}</Col>
            </Row>
           
            </div>      
 
        </div>
      );
}
 
export default Profile;