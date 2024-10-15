import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryApi, deleteVideoApi } from '../services/allApi';

function Videocard({ video, setDeleteVideoStatus, isPresent }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);

    const time = new Date()
    console.log(time);
    let formatedDate = new Intl.DateTimeFormat("en-GB", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(time)
    console.log(formatedDate);

    const reqBody = {
      Caption: video?.caption,
      url: video?.embeddedLink,
      time: formatedDate
    }

    const result = await addVideoHistoryApi(reqBody)
    console.log(result);

  }

  const handleDelete = async (id) => {
    const result = await deleteVideoApi(id)
    console.log(result);
    if (result.status >= 200 && result.status< 300) {
      setDeleteVideoStatus(result.data)
    }
  }

  const videoDrag = (e, video)=>{
    console.log(e);
    e.dataTransfer.setData("videoDetails", JSON.stringify(video))
    
  }


  return (
    <>
      <Card style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e, video)}>
       {!isPresent && <Card.Img variant="top" onClick={handleShow} src={video?.imageUrl} className='w-100' height={'300px'} />}
        <Card.Body className='d-flex justify-content-between'>
          <Card.Text>{video?.caption}</Card.Text>
         {!isPresent && <Button variant="danger"><FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(video?.id)} style={{ color: "#ffffff", }} /></Button>}
        </Card.Body>
      </Card>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="450" src={`${video?.embeddedLink}?autoplay=1`} title="Vaa Senthaazhini Video Song | Adiyae | G.V.Prakash Kumar, Gouri Kishan |Justin Prabhakaran | Vignesh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
      </Modal>



    </>
  )
}

export default Videocard