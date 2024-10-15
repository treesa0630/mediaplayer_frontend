import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import Allvideos from '../components/Allvideos'
import Category from '../components/Category'


function Home() {
 
  const[AddVideoStatus, setAddVideoStatus] = useState({})
  const[videoStatus, setVideoStatus] = useState({})

  return (
    <>
    <div className='d-flex p-md-5 p-3 align-items-center'>
      <Add setAddVideoStatus={setAddVideoStatus}/>
      <Link to={'/watchHistory'} style={{textDecoration:'none'}} className='ms-auto'><h5><span className='d-none d-md-inline'>Watch History</span>  <FontAwesomeIcon icon={faClockRotateLeft} style={{color: "#dfe4ec",}} /></h5></Link>
    </div>

    <div className='container'>
      <div className='row'>
        <div className="col-md-9">
          <Allvideos AddVideoStatus={AddVideoStatus} setVideoStatus={setVideoStatus}/>
        </div>
        <div className="col-md-3">
          <Category  videoStatus= {videoStatus}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home