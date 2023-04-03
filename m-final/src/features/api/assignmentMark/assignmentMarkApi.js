import apiSlice from "../apiSlice"


export const assignmentMarkApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getAssignmentMarks : builder.query({
            query: () => ({
                url: "/assignmentMark",
                method: "GET",
            }),
        }),
        // getAssignmentMark : builder.query({
        //     query: ({videoId, userId}) => ({
        //         url: `/assignmentMark/${addurl}`,
        //         method: "GET",
        //     }),
        // }) ,
        addAssignmentMark : builder.mutation({
            query: (data) => ({
                url: `/assignmentMark`,
                method: "POST",
                body: data
            }),
        }) ,
    })
})


export const {
    useGetAssignmentMarksQuery, 
    // useGetAssignmentMarkQuery,
    useAddAssignmentMarkMutation, 
} = assignmentMarkApi