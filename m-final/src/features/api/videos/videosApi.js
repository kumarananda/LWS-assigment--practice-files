import apiSlice from "../apiSlice";



export const videosApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getVideos : builder.query({
            query: () => ({
                url: "/videos",
                method: "GET",
            }),
        }) 
    })
})


export const { useGetVideosQuery } = videosApi