import apiSlice from "../apiSlice"


export const quizMarkApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getAllquizzesMarks : builder.query({
            query: () => ({
                url: "/quizMark",
                method: "GET",
            }),
        }),
        // getStuQuizMarks : builder.query({
        //     query: (student_id) => ({
        //         url: `/quizMark?student_id_like=${student_id}`,
        //         method: "GET",
        //     }),
        //     providesTags : (result, error, student_id) => [{ type: 'QuizMark', stuId : student_id }],
        // }),
        getStuVideoQuizMarks : builder.query({
            query: ({student_id, video_id}) => ({
                url: `/quizMark?student_id_like=${student_id}&video_id_like=${video_id}`,
                method: "GET",
            }),
            // providesTags : (result, error, {student_id, video_id}) => [{ type: 'QuizMark', stuId : student_id, vidId: video_id }],
            providesTags :  ['QuizMark'],
        }),

        addVidoeQuizMark : builder.mutation({
            query: (data) => ({
                url: `/quizMark`,
                method: "POST",
                body: data
            }),
            invalidatesTags : ["QuizMark"],
            // cash update reuire 
            // ****************
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                

                try {
                    const quizMark = await queryFulfilled;

                    // this.invalidatesTags = (result, error, {student_id, video_id}) => [{ type: 'QuizMark', stuId : student_id, vidId: video_id }],

                    console.log(quizMark.data);

                    if (quizMark?.data?.id) {

                        // update assignment cache pessimistically start
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getStuVideoQuizMarks",
                                undefined,
                                (draft) => {
                                    const updateIndex = draft.findIndex(item => item.id == arg.id);
                                    draft = [{...quizMark.data}]
                                }
                                
                            )
                        )

                        // dispatch(
                        //     apiSlice.util.updateQueryData(
                        //         "getAssignmentMarks",
                        //         arg.id.toString(),
                        //         (draft) => {
                        //         //    return draft = assignment.data
                        //         //    return assignment.data
                        //             Object.assign(draft, assignmentMark.data)
                        //         }
                                
                        //     )
                        // );
                        // update assignment cache pessimistically end
                    }
                } catch (err) {
                    console.log(err);
                }
            },
        }),
        

    })
})


export const {
    useGetAllquizzesMarksQuery,
    // useGetStuQuizMarksQuery,
    useGetStuVideoQuizMarksQuery,
    useAddVidoeQuizMarkMutation,
} = quizMarkApi;