import axios from "../../utils/axios"


export const jobsApi = async () =>  {
    const response = await axios.get("/jobs")

    return response.data
}
export const addJobApi = async (data ={}) =>  {
    const response = await axios.post("/jobs", data)

    return response.data
}
export const removeJobApi = async (id) =>  {
    const response = await axios.delete(`/jobs/${id}` )
    
    return response.data
}