import React, { useState, Fragment } from 'react'
import axios from 'axios'

const AudioUpload = () => {
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
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)

    try {
      //Need to connect to the server
      const res = await axios.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      const { fileName, filePath } = res.data
      if (res.status === 200) {
        console.log('Was uploaded successfully ' + res.status)
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
    //The fragment allows to group children without creating extra nodes

    <Fragment>
      <div className="mb-2">
        <form onSubmit={onSubmit}>
          <div className="input-group mb-3">
            <input
              type="file"
              className="form-control"
              id="inputGroupFile02"
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

      {/* {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">{uploadedFile.filename}</h3>
            <img style={{ width: '50%' }} src={uploadedFile.filepath} alt="" />
          </div>
        </div>
      ) : null} */}
    </Fragment>
  )
}

export default AudioUpload
