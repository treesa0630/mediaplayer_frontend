import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// destructuring is used to access particular key from object(props)
function Add({setAddVideoStatus}) {
  const [show, setShow] = useState(false);
  const handleClose = () => { setShow(false); handleCancel() }
  const handleShow = () => setShow(true);

  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imageUrl: "",
    embeddedLink: ""
  })

  const handleCancel = () => {
    setVideoDetails({
      caption: "",
      imageUrl: "",
      embeddedLink: ""
    })
    handleClose()
  }

  console.log(videoDetails);


  const handleAdd = async () => {
    const { caption, imageUrl, embeddedLink } = videoDetails

    if (!caption || !imageUrl || !embeddedLink) {
      toast.info('Please fill the form completely')
    }
    else {
      if (videoDetails.embeddedLink.startsWith('https://youtu.be/')) {
        const embedL = `https://www.youtube.com/embed/${videoDetails.embeddedLink.slice(17, 28)}`
        // setVideoDetails({ ...videoDetails, embeddedLink:embedL })

        const result = await AddVideoApi({ ...videoDetails, embeddedLink: embedL })
        console.log(result);

        if (result.status >= 200 && result.status < 300) {
          toast.success('Video Uploaded Successfully')
          handleClose()
          setAddVideoStatus(result.data)
        }
        else {
          toast.error('Something went wrong')
          handleClose()
        }

      }
      else {
        const embedL = `https://www.youtube.com/embed/${videoDetails.embeddedLink.slice(-11)}`
        // setVideoDetails({ ...videoDetails, embeddedLink:embedL })

        const result = await AddVideoApi({ ...videoDetails, embeddedLink: embedL })
        console.log(result);

        if (result.status >= 200 && result.status < 300) {
          toast.success('Video Uploaded Successfully')
          handleClose()
          setAddVideoStatus(result.data)
        }
        else {
          toast.error('Something went wrong')
          handleClose()
        }

      }
    }
  }

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5 className='d-none d-md-inline'>Upload a new video</h5>
        <button className='btn pb-3' onClick={handleShow} ><FontAwesomeIcon size='xl' icon={faCloudArrowUp} style={{ color: "#ffffff", }} /></button>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} /> Upload New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body><p >Please upload a video here</p>
          <form className='p-3 mt-3 border border-secondary'>
            <div className='mb-3 rounded border border-dark'> <input placeholder='Video Caption' value={videoDetails.caption} name='caption' onChange={(v) => setVideoDetails({ ...videoDetails, caption: v.target.value })} className='form-control' type="text" /></div>
            <div className='mb-3 rounded border border-dark'> <input placeholder='Video Image' value={videoDetails.imageUrl} name='image' onChange={(v) => setVideoDetails({ ...videoDetails, imageUrl: v.target.value })} className='form-control' type="text" /></div>
            <div className='mb-3 rounded border border-dark'> <input placeholder='Video URL' value={videoDetails.embeddedLink} name='url' onChange={(v) => setVideoDetails({ ...videoDetails, embeddedLink: v.target.value })} className='form-control' type="text" /></div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type='button' onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" type='button' onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="colored"
      />
    </>
  )
}

export default Add