import React, { useState } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

const AudioUpload = () => {
  //Need to use a hook to set text in the label to the file namespace
  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Choose File')
  const [uploadedFile, setUploadedFile] = useState({})

  const onChange = (e) => {
    //HTML file uploads come as an array so we want the index of the first file
    console.log("N1",e.target.files)
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
  }

  const onSubmit = async (e) => {
    // e.preventDefault() used to prevent submitting by accident by preventing normal submitting
    e.preventDefault()
    const formData = new FormData()
    console.log(file)
    formData.append('file', file)

    try {
      //Need to connect to the server the endpoint is media
      const res = await axios.post(
        'http://localhost:5000/upload/media',
        formData,
        // {
        //   headers: { 'Content-Type': 'multipart/form-data' },
        // },
      )
      const { fileName, filePath } = res.data
      console.log(res.headers)
      if (res.status === 200) {
        console.log('Was uploaded successfully ' + res.status)
      }
      setUploadedFile({ fileName, filePath })
    } catch (err) {
      if (err.status === 500) {
        console.error('There is a problem with the server ' + err.message)
      } else {
        //This message is from the server if no file is uploaded
        console.error(err.message)
      }
    }
  }

  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Body>
        <Card.Title>Audio Upload</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Select audio to upload
        </Card.Subtitle>
        <Card.Text>
          <>
            <div className="mb-2">
              <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control mb-5"
                    id="inputGroupFile02"
                    accept="audio/wav, audio/mp3, audio/mpeg"
                    onChange={onChange}
                  />
                  <input
                    type="submit"
                    value="UploadAudio"
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

export default AudioUpload
