import React, { useState } from "react"
  import { Card, Button, Alert } from "react-bootstrap"
  import { useAuth } from "../contexts/AuthContext"
  import { Link, useHistory } from "react-router-dom"
  
  export default function Dashboard() {
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
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
      } catch {
        setError("Failed to log out")
      }
    }
  
    return (
      <>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
            <strong>Saved Visualizer:</strong>
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </>
    )
  }