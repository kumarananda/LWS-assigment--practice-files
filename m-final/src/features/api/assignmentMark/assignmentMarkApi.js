import apiSlice from "../apiSlice"


export const assignmentMarkApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getAssignmentMarks : builder.query({
            query: () => ({
                url: "/assignmentMark",
                method: "GET",
            }),
        }),
        getAssignmentMark : builder.query({
            query: ({student_id, assignment_id}) => ({
                url: `/assignmentMark?student_id_like=${student_id}&assignment_id_like=${assignment_id}`,
                method: "GET",
            }),
            providesTags : (result, error, {student_id, assignment_id}) => [{ type: 'AssignmentMark', id : assignment_id,stu_Id: student_id }],
        }),

        addAssignmentMark : builder.mutation({
            query: (data) => ({
                url: `/assignmentMark`,
                method: "POST",
                body: data
            }),
        }) ,
        updateAssignmentMark :  builder.mutation({
            query: ({id,mark}) => ({
                url: `/assignmentMark/${id}`,
                method: "PATCH",
                body: {
                    mark,
                    status : "published"
                }
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                
                try {
                    const assignmentMark = await queryFulfilled;
                    if (assignmentMark?.data?.id) {

                        // update assignment cache pessimistically start
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getAssignmentMarks",
                                undefined,
                                (draft) => {
                                    const updateIndex = draft.findIndex(item => item.id == arg.id);
                                    draft[updateIndex] = assignmentMark.data
                                }
                                
                            )
                        )

                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getAssignmentMarks",
                                arg.id.toString(),
                                (draft) => {
                                //    return draft = assignment.data
                                //    return assignment.data
                                    Object.assign(draft, assignmentMark.data)
                                }
                                
                            )
                        );
                        // update assignment cache pessimistically end
                    }
                } catch (err) {
                    console.log(err);
                }
            },

        }) ,
    })
})


export const {
    useGetAssignmentMarksQuery, 
    useGetAssignmentMarkQuery,
    useAddAssignmentMarkMutation, 
    useUpdateAssignmentMarkMutation,
} = assignmentMarkApi