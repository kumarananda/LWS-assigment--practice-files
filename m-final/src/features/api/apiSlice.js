import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const apiSlice = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:9000"
    }),
    tagTypes : ["Videos", "Video"],
    endpoints : (builder) => ({}) 

})
export default apiSlice