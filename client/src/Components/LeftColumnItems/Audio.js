import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const Audio = () => {

    return (

        <Modal.Dialog centered>
            <Modal.Header closeButton>
                <Modal.Title>Upload your audio track</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default Audio
