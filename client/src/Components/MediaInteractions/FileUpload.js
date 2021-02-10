import React, { useState } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import Playlist from './Playlist'

const FileUpload = (props) => {
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
    // e.preventDefault() used to prevent submitting by accident by preventing normal submitting
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)

    try {
      //Need to connect to the server the endpoint is media
      const res = await axios.post(
        'http://localhost:5000/upload/media',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      )
      const { fileName, filePath } = res.data
      console.log(res.headers)
      if (res.status === 200) {
        console.log('Was uploaded successfully ' + res.status)
      }
      setUploadedFile({ fileName, filePath })
    } catch (err) {
      if (err.response.status === 500) {
        console.error('There is a problem with the server ' + err.message)
      } else {
        //This message is from the server if no file is uploaded
        // console.error('we had an error??? ' + err.response.data.msg)
        console.error(err.response.data.msg)
      }
    }
  }
  // If the audio button is selected
  if (props.mediatype == 'Audio') {
    return (
      <Card style={{ width: '16rem', margin: '16px' }}>
        <Card.Body>
          <Card.Title>{props.mediatype} Upload</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Select {props.mediatype} to Upload
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
                      accept={`${props.mediatype}/wav, ${props.mediatype}/mp3, ${props.mediatype}/mpeg`}
                      onChange={onChange}
                    />
                    <input
                      type="submit"
                      value={`Upload ${props.mediatype}`}
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
        <Playlist />
      </Card>
    )
  }
  if (props.mediatype == 'Background') {
    return (
      <Card style={{ width: '16rem', margin: '16px' }}>
        <Card.Body>
          <Card.Title>{props.mediatype} Upload</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Select {props.mediatype} to Upload
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
                      accept={`${props.filetype}/jpg, ${props.filetype}/jpeg, ${props.filetype}/bmp`}
                      onChange={onChange}
                    />
                    <input
                      type="submit"
                      value={`Upload ${props.mediatype}`}
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
  return (
    <Card style={{ width: '16rem', margin: '16px' }}>
      <Card.Body>
        <Card.Title>{props.mediatype} Upload</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Select {props.mediatype} to Upload
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
                    accept={`${props.filetype}/gif, ${props.filetype}/png, ${props.filetype}/jpg`}
                    onChange={onChange}
                  />
                  <input
                    type="submit"
                    value={`Upload ${props.mediatype}`}
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

export default FileUpload
