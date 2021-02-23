import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Card, ListGroup } from 'react-bootstrap'

const IconUpload = (props) => {
  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Choose File')
  const [uploadedFile, setUploadedFile] = useState({})
  const [imagelist, setImagelist] = useState([])

 

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
      const res = await axios.post(
        'http://localhost:5000/iconUpload/icon',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      )
      const { fileName, filePath } = res.data
      // console.log('These are the headers', res.headers)
      if (res.status === 200) {
        console.log('File was uploaded successfully ' + res.status)
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


  const getImagelist = useCallback(() => {
    axios
      .get('http://localhost:5000/iconUpload/iconList')
      .then((res) => {
        console.log('this is the res', res.data)
        return res.data
      })
      .then((imagelist) => {
        setImagelist(imagelist)
      })
  }, [setImagelist])
  useEffect(() => {
    getImagelist()
  }, [uploadedFile, getImagelist])

  // If the Icon button is selected

  if (props.mediatype === 'Icon') {
    return (
      <Card style={{ height: '25rem' }}>
        <Card.Body className="modalUpload">
          <Card.Title className="mb-2 text-muted">
            {props.mediatype} Upload
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Select {props.mediatype} to Upload
          </Card.Subtitle>
          <Card.Text>
            <>
              {/* <div className="mb-2"> */}
              <div>
                <form onSubmit={onSubmit}>
                  {/* <div className="input-group mb-3"> */}
                  <div>
                    <input
                      type="file"
                      // className="form-control mb-5"
                      className="modalUpload"
                      // id="inputGroupFile02"
                      accept={`${props.filetype}/jpg, ${props.filetype}/jpeg, ${props.filetype}/png, ${props.filetype}/bmp`}
                      onChange={onChange}
                    />
                    <input
                      type="submit"
                      value={`Submit`}
                      // className="btn btn-primary btn-block"
                      className="btn2"
                      onClick={() => getImagelist()}
                    />

                    {/* <label
                      className="id=inputGroupFile02"
                      htmlFor="inputGroupFile02"
                    ></label> */}
                    <ListGroup
                      action
                      onClick={(event) => {
                        props.getIcon(event.target.firstChild.data)
                      }}
                    >
                      {imagelist?.map((picture, index) => {
                        return (
                          <ListGroup.Item action key={index} value={picture}>
                            {picture}
                          </ListGroup.Item>
                        )
                      })}
                    </ListGroup>
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
                    value={`Submit`}
                    // className="btn btn-primary btn-block"
                    className="btn1"
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
