import apiSlice from "../api/apiSlice"

export const tesksApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getTasks : builder.query({
            query: () => ({
                url: "/tasks",
                method: "GET",
            }),
           
        }), 
        deleteTask : builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "DELETE",
            }),
           
        }), 
        addTasks : builder.mutation({
            query: () => ({
                url: "/tasks",
                method: "POST",
            }),
           
        }), 
    })
})


export const { useGetTasksQuery, useDeleteTaskMutation, useAddTasksMutation  } = tesksApi 