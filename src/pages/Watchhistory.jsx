import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryVideoApi, getAllVideoHistoryApi } from '../services/allApi'


function Watchhistory() {
  const [allHisVideos, setallHisVideos] = useState([])
  const [deleteStatus, setDeleteStatus] = useState(false)

  const getAllHistoryVideos = async()=>{
    const result = await getAllVideoHistoryApi()
    setallHisVideos(result.data)
    


  }
  console.log(allHisVideos);
  

  const handleDelete = async(id)=>{
    const result = await deleteHistoryVideoApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setDeleteStatus(true)
    }
    
  }

  useEffect(()=>{
    getAllHistoryVideos()
    setDeleteStatus()
  },[deleteStatus])

  return (
    <>
    <div className='p-4'>
      <div className='d-flex mt-5'>
        <h4>Watch History</h4> 
        <Link to={'/home'} style={{textDecoration:'none'}} className='ms-auto'><h5> <FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} /> <span className='d-none d-md-inline'>Back Home</span></h5></Link>   
      </div>

      <div className="container">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 p-3 table-responsive">
        {allHisVideos?.length>0? <table className='table mt-5'>
            <thead>
              <tr>
                <th>sl.no</th>
                <th>Caption</th>
                <th>Url</th>
                <th>Timestamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allHisVideos?.map((item)=>(
                <tr>
                <td>{item?.id}</td>
                <td>{item?.Caption}</td>
                <td>{item?.url}</td>
                <td>{item?.time}</td>
                <td><button type='button' onClick={()=>handleDelete(item?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} style={{color: "#ffffff",}} /></button></td>
              </tr>
              ))
              }
            </tbody>
          </table>
          :
          <h4 className='text-warning text-center'>No Watch History</h4>}
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Watchhistory