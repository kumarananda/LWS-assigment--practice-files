import axios from "../../utils/axios";

export const getsPostApi = async (id) => {


    const response = await axios.get(`/blogs/${id}`)

    // console.log(response.data);
    return response.data

}


export const patchsPostApi = async (update={}, prevPost) => {

    const { updateKey,} = update;

    // console.log(prevPost.likes);

    if(updateKey === "likes"){
        // add/ likes
        const response = await axios.patch(`/blogs/${prevPost.id}`, {
            likes: prevPost.likes +1
        })
         // console.log(response.data);
        return response.data
    }
    if(updateKey === "isSaved"){
        // add/ likes
        const response = await axios.patch(`/blogs/${prevPost.id}`, {
            isSaved: !prevPost.isSaved
        })
         // console.log(response.data);
        return response.data
    }
    

   

}













// export const addLikeReq = async (id, prevLike) => {

//     const response = await axios.patch(`/blogs/${id}`, {
//         likes : prevLike+1
//     })


//     return response.data

// }

// export const toggoleSavedReq = async (id, previsSaved) => {

//     const response = await axios.patch(`/blogs/${id}`, {
//         isSaved : !previsSaved
//     })
    

//     return response.data

// }
