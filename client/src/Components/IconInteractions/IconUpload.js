import React, { useState, Fragment } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

const IconUpload = () => {
  //Need to use a hook to set text in the label to the file namespace
  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Choose File')
  const [uploadedFile, setUploadedFile] = useState({})

  const onChange = (e) => {
    //HTML file uploads come as an array so we want the index of the first file
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
  }

  const onSubmit = async (e) => {
    //used to prevent submitting by accident by preventing normal submitting
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    console.log(formData)
    try {
      //Need to connect to the server this is the endpoint
      const res = await axios.post(
        'http://localhost:5000/upload/icon',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      )
      const { fileName, filePath } = res.data
      if (res.status === 200) {
        console.log('Icon was uploaded successfully ' + res.status)
      }
      setUploadedFile({ fileName, filePath })
    } catch (err) {
      if (err.response.status === 500) {
        console.error('There is a problem with the server ' + err.message)
      } else {
        //This message is from the server if no file is uploaded
        console.error(err.response.data.msg)
      }
    }
  }

  return (
    <Card style={{ width: '18rem', margin: '24px' }}>
      <Card.Body>
        <Card.Title>Upload Icon</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Select an Icon to upload
        </Card.Subtitle>
        <Card.Text>
          <>
            <div className="mb-2">
              <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                    accept="image/gif, image/png, image/jpeg, image/jpg"
                    onChange={onChange}
                  />
                  <input
                    type="submit"
                    value="Upload Background"
                    className="btn btn-primary btn-block"
                  />

                  <label
                    className="id=inputGroupFile02"
                    htmlFor="inputGroupFile02"
                  ></label>
                </div>
              </form>
            </div>
          </>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default IconUpload
