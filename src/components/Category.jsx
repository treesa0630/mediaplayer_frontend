import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Videocard from './Videocard';
import { toast } from 'react-toastify';
import { addCategoryApi, addVideoToCategoryApi, deleteCategoryApi, getAllCategoryApi } from '../services/allApi';


function Category({ videoStatus }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [categoryName, setcategoryName] = useState("")
  console.log(categoryName);
  const [allCategory, setAllCategory] = useState([])
  const [AddcategoryStatus, setAddcategoryStatus] = useState({})
  const [deleteCategoryStatus, setdeleteCategoryStatus] = useState({})
  const [videoCategoryStatus, setvideoCategoryStatus] = useState({})


  const handleClose = () => {
    setShow(false);
    handleCancel()
  }

  const handleCancel = () => {
    setcategoryName("")
  }


  const handleAdd = async () => {
    if (categoryName) {
      const reqBody = {
        category: categoryName,
        allvideos: []
      }

      const result = await addCategoryApi(reqBody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success('category added successfully')
        handleClose()
        setAddcategoryStatus(result.data)
      }
      else {
        toast.error('Something went wrong')
        handleClose()
      }
    }
    else {
      toast.info('Please add a category name')
    }

  }


  const getCategory = async () => {
    const result = await getAllCategoryApi()
    setAllCategory(result.data);

  }
  console.log(allCategory);


  const handleDelete = async (id) => {
    const result = await deleteCategoryApi(id)
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setdeleteCategoryStatus(result.data)
    }

  }

  const ondrag = (e) => {
    e.preventDefault()  // prevents the data lose
  }



  const VideoDrop = async (e, categoryDetails) => {
    console.log(categoryDetails);


    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);


    if (categoryDetails?.allvideos?.find((item) => item.id == videoDetails.id)) {
      toast.info('Video already exist in the category')
    }
    else {
      categoryDetails?.allvideos?.push(videoDetails)
      console.log(categoryDetails);


      const result = await addVideoToCategoryApi(categoryDetails.id, categoryDetails)

      if (result.status >= 200 && result.status < 300) {
        toast.success('Video added to category')
        setvideoCategoryStatus(result.data)
      }
      else {
        toast.error('Something went wrong')
      }
    }

  }


  const videoDrag = (e, video, category) => {
    console.log(video);
    console.log(category);

    const dataShare = {
      category,
      video
    }

    e.dataTransfer.setData("dataShare", JSON.stringify(dataShare))
  }




  useEffect(() => {
    getCategory()
  }, [AddcategoryStatus, deleteCategoryStatus, videoCategoryStatus, videoStatus])


  return (
    <>
      <h4 className='mb-4'>Category</h4>
      <button onClick={handleShow} className='btn btn-warning w-100 mb-3'>Add Category</button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border border-secondary p-3 rounded'>
            <input className='form-control' value={categoryName} onChange={(c) => setcategoryName(c.target.value)} placeholder='Category' type="text" name="" id="" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleAdd} type='button' variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>


      {allCategory?.length > 0 &&

        allCategory?.map((item) => (
          <div className='border border-secondary p-3 rounded mb-3' droppable onDragOver={(e) => ondrag(e)} onDrop={(e) => VideoDrop(e, item)}>
            <div className='d-flex justify-content-between '>
              <h6>{item?.category}</h6>
              <Button onClick={() => handleDelete(item?.id)} variant="danger"><FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff", }} /></Button>
            </div>
            {
              item?.allvideos?.length > 0 && item?.allvideos?.map((video) => (
                <div className='mb-3' draggable onDragStart={(e) => videoDrag(e, item, video)}>
                  <Videocard video={video} isPresent={true} />
                </div>))
            }
          </div>
        ))

      }
    </>
  )
}

export default Category