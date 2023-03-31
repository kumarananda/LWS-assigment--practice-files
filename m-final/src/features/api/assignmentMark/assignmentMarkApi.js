import apiSlice from "../apiSlice"


export const assignmentMarkApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getAssignmentMark : builder.query({
            query: () => ({
                url: "/assignmentMark",
                method: "GET",
            }),
        }) 
    })
})


export const { useGetAssignmentMarkQuery } = assignmentMarkApi