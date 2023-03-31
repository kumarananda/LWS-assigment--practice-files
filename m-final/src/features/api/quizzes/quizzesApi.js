import apiSlice from "../apiSlice"


export const quizzessApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getQuizzess : builder.query({
            query: () => ({
                url: "/quizzes",
                method: "GET",
            }),
        }) 
    })
})


export const { useGetQuizzessQuery } = quizzessApi