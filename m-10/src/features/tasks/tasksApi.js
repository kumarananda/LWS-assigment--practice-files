import apiSlice from "../api/apiSlice"

export const tesksApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getTasks : builder.query({
            query: () => ({
                url: "/tasks",
                method: "GET",
            }),
           
        }), 
        getSingleTask : builder.query({
            query: (id) => ({
                url: `/tasks/${id}`,
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
            query: (body) => ({
                url: "/tasks",
                method: "POST",
                body 
            }),
           
        }), 
        editTask : builder.mutation({
            query: ({id, body}) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body 
            }),
            
           
        }), 
    })
})


export const { useGetTasksQuery, useDeleteTaskMutation, useAddTasksMutation, useEditTaskMutation ,useGetSingleTaskQuery } = tesksApi 