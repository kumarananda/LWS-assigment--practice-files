import apiSlice from "../apiSlice"


export const assignmentsApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getAssignments : builder.query({
            query: () => ({
                url: "/assignments",
                method: "GET",
            }),
        }) 
    })
})


export const { useGetAssignmentsQuery } = assignmentsApi