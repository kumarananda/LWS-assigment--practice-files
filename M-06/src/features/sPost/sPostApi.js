import axios from "../../utils/axios";

export const sPostApi = async (id) => {

    const response = await axios.get(`/blogs/${id}`)

    return response.data

}


export const addLikeReq = async (id, prevLike) => {

    const response = await axios.patch(`/blogs/${id}`, {
        likes : prevLike+1
    })


    return response.data

}

export const toggoleSavedReq = async (id, previsSaved) => {

    const response = await axios.patch(`/blogs/${id}`, {
        isSaved : !previsSaved
    })
    
    console.log(response.data);
    return response.data

}
