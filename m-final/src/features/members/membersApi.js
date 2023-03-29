import apiSlice from "../api/apiSlice";



export const membersApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getMembers : builder.query({
            query: () => ({
                url: "/team",
                method: "GET",
            }),
           
        }) 
    })
})


export const { useGetMembersQuery } = membersApi 