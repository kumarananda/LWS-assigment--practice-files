import apiSlice from "../api/apiSlice"

export const tesksApi = apiSlice.injectEndpoints({
    
    endpoints : (builder) => ({
        getTasks : builder.query({
        
            query: () => ({
                url: "/tasks",
            }),
            
        }), 
        getSingleTask : builder.query({
            query: (id) => ({
                url: `/tasks/${id}`,
            }),
            providesTags: (result, error, id) => [{ type: 'Task', id }],
           
        }), 
        deleteTask : builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "DELETE",
            }),
            // if cache stored for single Task
            invalidatesTags : (result, error, id) => [{ type: 'Task', id }],

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // optimistic cache update start
                const allTaskTarget = dispatch(
                    apiSlice.util.updateQueryData(
                        "getTasks",
                        undefined,
                        (draft) => {
                            // done
                            // const deleteIndex = draft.findIndex(item => item.id == arg) 
                            // draft.splice(deleteIndex, 1)

                            //done
                            return draft.filter(item => item.id !== arg) 
                            
                        }
                    )
                );
                // optimistic cache update end
                try {
                     await queryFulfilled;
                } catch (err) {
                    allTaskTarget.undo();
                }

            },
           
        }), 
        addTasks : builder.mutation({
            query: (body) => ({
                url: "/tasks",
                method: "POST",
                body 
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                
                try {
                    const task = await queryFulfilled;
                    if (task?.data?.id) {

                        // update messages cache pessimistically start
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getTasks",
                                undefined,
                                (draft) => {
                                    draft.push(task.data);
                                }
                            )
                        );
                        // update messages cache pessimistically end
                    }
                } catch (err) {
                    console.log(err);
                }
            },
           
        }), 
        editTask : builder.mutation({
            query: ({id, body}) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body 
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                
                try {
                    const task = await queryFulfilled;
                    if (task?.data?.id) {

                        // update messages cache pessimistically start
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getTasks",
                                undefined,
                                (draft) => {
                                    const updateIndex = draft.findIndex(item => item.id == arg.id);

                                    draft[updateIndex] = task.data

                                }
                                
                            )
                        )

                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getSingleTask",
                                arg.id.toString(),
                                (draft) => {
                                //    return draft = task.data
                                //    return task.data
                                    Object.assign(draft, task.data)
                                }
                                
                            )
                        );
                        // update messages cache pessimistically end
                    }
                } catch (err) {
                    console.log(err);
                }
            },
           
        }), 
        // 
        editTaskStatus : builder.mutation({
            query: ({id, body}) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body 
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // optimistic cache update start
                const allTaskTarget = dispatch(
                    apiSlice.util.updateQueryData(
                        "getTasks",
                        undefined,
                        (draft) => {
                            const updateIndex = draft.findIndex(item => item.id == arg.id) 
                            draft[updateIndex] = arg.body
                        }
                    )
                );
                // optimistic cache update end
                try {
                    const conversation = await queryFulfilled;
                } catch (err) {
                    allTaskTarget.undo();
                }

            },
        }),
    })
})


export const { 
    useGetTasksQuery, 
    useDeleteTaskMutation, 
    useAddTasksMutation, 
    useEditTaskMutation, 
    useGetSingleTaskQuery, 
    useEditTaskStatusMutation 
} = tesksApi 