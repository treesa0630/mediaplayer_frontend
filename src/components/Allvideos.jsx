import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { addVideoToCategoryApi, getVideosApi } from '../services/allApi'
import { toast } from 'react-toastify'

function Allvideos({ AddVideoStatus , setVideoStatus}) {

    const [allVideos, setAllVideos] = useState([])
    const [deleteVideoStatus, setDeleteVideoStatus] = useState({})


    // side effect

    const getAllVideo = async () => {
        const result = await getVideosApi()
        setAllVideos(result.data)

    }
    console.log(allVideos);



    const ondrop = (e) => {
        e.preventDefault()
    }



    const VideoDrop = async (e) => {
        const { category, video } = JSON.parse(e.dataTransfer.getData("dataShare"))
        console.log(category, video);


        const newArray = category?.allvideos?.filter((item) => item.id != video.id)
        const newCategory = {
            category: category.category,
            allvideos: newArray,
            id: category.id
        }
        const result = await addVideoToCategoryApi(category.id, newCategory)
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
            setVideoStatus(result.data)
        }

    }


    // to handle side effects
    useEffect(() => {
        getAllVideo()
    }, [AddVideoStatus, deleteVideoStatus])  // useEffect is called when the component render to the browser



    return (
        <>
            <div droppable onDragOver={(e) => ondrop(e)} onDrop={(e) => VideoDrop(e)}>
                <h4>All Videos</h4>

                {/*  added video */}

                {allVideos.length > 0 ?

                    <div className="container py-5 mb-5">
                        <div className="row">
                            {allVideos.map((item) => (
                                <div className="col-md-3 mt-2">
                                    <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus} />
                                </div>
                            ))

                            }
                        </div>
                    </div>

                    :

                    // no video

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn877lCrGteB0wGGoRxMTf6sN4ZwYelkw_6g&s" alt="" />
                                <h5>No vidoes available</h5>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>

                }

            </div>

        </>
    )
}

export default Allvideos