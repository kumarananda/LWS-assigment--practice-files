import axios from "../../utils/axios";



export const postsApi = async () => {

    const response = await axios.get("/blogs")

    return response.data

}


