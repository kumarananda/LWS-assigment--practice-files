import axios from "../../utils/axios"



export const editJobApi = async (id) =>  {
    const response = await axios.get(`/jobs/${id}`)

    return response.data
}
