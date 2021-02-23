import React, { useState, useEffect, useCallback, useContext } from 'react'
import axios from 'axios'
import { Card, ListGroup } from 'react-bootstrap'
import Playlist from './Playlist'
// import ImageList from './ImageList'
import { PlaylistContext } from '../../contexts/PlaylistContext'

const FileUpload = (props) => {
  //Need to use a hook to set text in the label to the file namespace
  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Choose File')
  const [uploadedFile, setUploadedFile] = useState({})
  const [imagelist, setImagelist] = useState([])

  const { setSongList } = useContext(PlaylistContext)

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
        'http://localhost:5000/upload/media',
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

  // Gets the playlist and sends to the Playlist Component

  const fetchSongSelect = useCallback(() => {
    axios
      .get('http://localhost:5000/upload/list')
      .then((res) => {
        // console.log('this is the res', res)
        return res.data
      })
      .then((playlist) => {
        // console.log('This is the playlist', playlist)
        // console.log(`Playlist length in FileUpload`, playlist.length)
        setSongList(playlist)
      })
  }, [setSongList])

  useEffect(() => {
    fetchSongSelect()
  }, [uploadedFile, fetchSongSelect])

  //get imagelist + send to imagelist component
  const getImagelist = useCallback(() => {
    axios
      .get('http://localhost:5000/upload/backgroundList')
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

  // If the Audio button is selected
  if (props.mediatype === 'Audio') {
    return (
      // <Card style={{ width: '29rem', margin: '16px' }}>
      <Card style={{ height: '25rem' }}>
        <Card.Body className="modalUpload">
          <Card.Title className="mb-2 text-muted">
            {props.mediatype} Upload
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Select {props.mediatype} (mpeg/mp3/flac/wav) to Upload
          </Card.Subtitle>
          <Card.Text>
            <>
              {/* <div className="mb-2"> */}
              <div>
                <form onSubmit={onSubmit}>
                  {/* <div className="input-group mb-4"> */}
                  <div>
                    <input
                      type="file"
                      // className="form-control mb-5"
                      className="modalUpload"
                      // id="inputGroupFile02"
                      accept={`${props.mediatype}/wav, ${props.mediatype}/mp3, ${props.mediatype}/mpeg`}
                      onChange={onChange}
                    />
                    <input
                      type="submit"
                      value={`Submit`}
                      // className="btn btn-primary btn-block"
                      className="btn2"
                      onClick={() => fetchSongSelect()}
                    />
                    {/* <label
                      className="id=inputGroupFile02"
                      htmlFor="inputGroupFile02"
                    ></label> */}
                    <Playlist uploadedFile={uploadedFile} />
                  </div>
                </form>
              </div>
            </>
          </Card.Text>
        </Card.Body>
        {/* <Playlist uploadedFile={uploadedFile} /> */}
      </Card>
    )
  }
  if (props.mediatype === 'Background') {
    return (
      <Card style={{ height: '25rem' }}>
        <Card.Body className="modalUpload">
          <Card.Title className="mb-2 text-muted">
            {props.mediatype} Upload
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Select {props.mediatype} (jpeg/jpg/bmp/png) to Upload
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
                        props.getPicture(event.target.firstChild.data)
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
                      accept={`${props.filetype}/jpg, ${props.filetype}/jpeg, ${props.filetype}/bmp`}
                      onChange={onChange}
                    />
                    <input
                      type="submit"
                      value={`OK`}
                      // className="btn btn-primary btn-block"
                      className="btn2"
                    />
                  </div>
                </form>
              </div>
            </>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default FileUpload
