import axios from "../../utils/axios";



export const rPostsApi = async (id, tags=[]) => {

    // filter id_ne  used
    let quaryString = tags.length > 0 ?  
    tags.map(tag => "tags_like="+tag ).join("&")+ "&id_ne="+id : 
    "id_ne="+id;

    // // without filter id_ne  
    // let quaryString = tags.length > 0 ?  
    // tags.map(tag => "tags_like="+tag ).join("&"): 
    // "";
    // console.log(quaryString);
    const response = await axios.get(`/blogs/?${quaryString}`)

    return response.data

}
