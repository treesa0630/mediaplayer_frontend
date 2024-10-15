import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

// to add video
export const AddVideoApi = async(reqBody)=>{
    return await commonApi('POST', `${serverUrl}/videos`, reqBody)
}

// to get data from server
export const getVideosApi = async()=>{
    return await commonApi('GET', `${serverUrl}/videos`)
}

// to add video history
export const addVideoHistoryApi = async(reqBody)=>{
    return await commonApi('POST', `${serverUrl}/history`, reqBody) 
}

// api to get video from history
export const getAllVideoHistoryApi = async()=>{
    return await commonApi('GET', `${serverUrl}/history`) 
}

//  to delete a video from all videos
export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE', `${serverUrl}/videos/${id}`)
}

// to delete video from history
export const deleteHistoryVideoApi = async(id)=>{
    return await commonApi('DELETE', `${serverUrl}/history/${id}`)
}

// to add category
export const addCategoryApi = async(reqBody)=>{
    return await commonApi('POST', `${serverUrl}/category`, reqBody)
}

//  to get category 
export const getAllCategoryApi = async()=>{
    return await commonApi('GET', `${serverUrl}/category` )
}

// to delete category
export const deleteCategoryApi = async(id)=>{
    return await commonApi('DELETE', `${serverUrl}/category/${id}` )
}

//  to add video details to a category
export const addVideoToCategoryApi = async(id, reqBody)=>{
    return await commonApi('PUT', `${serverUrl}/category/${id}`, reqBody)
}



//  to add video details to a category
// export const addVideoBackToAllVideosApi = async(id, reqBody)=>{
//     return await commonApi('PUT', `${serverUrl}/videos/${id}`, reqBody)
// }