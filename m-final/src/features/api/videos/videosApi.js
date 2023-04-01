import apiSlice from "../apiSlice";



export const videosApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getVideos : builder.query({
            query: () => ({
                url: "/videos",
                method: "GET",
            }),
            providesTags: (result, error,) => [{ type: 'Videos' }],

        }), 
        getVideo : builder.query({
            query: (id) => ({
                url: `/videos/${id}`,
            }),
            providesTags: (result, error, id) => [{ type: 'Video', id }],
           
        }),
        addVideo : builder.mutation({
            query: (data) => ({
                url: "/videos",
                method: "POST",
                body :data

            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                
                try {
                    const video = await queryFulfilled;
                    if (video?.data?.id) {

                        // update videos cache pessimistically start
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getVideos",
                                undefined,
                                (draft) => {
                                    draft.push(video.data);
                                }
                            )
                        );
                        // update videos cache pessimistically end
                    }
                } catch (err) {
                    console.log(err);
                }
            },

        }),
        editVideo: builder.mutation({
            query: ({id,data}) => ({
                url: `/videos/${id}`,
                method: "PATCH",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                
                try {
                    const video = await queryFulfilled;
                    if (video?.data?.id) {

                        // update messages cache pessimistically start
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getVideos",
                                undefined,
                                (draft) => {
                                    const updateIndex = draft.findIndex(item => item.id == arg.id);
                                    draft[updateIndex] = video.data
                                }
                                
                            )
                        )

                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getVideo",
                                arg.id.toString(),
                                (draft) => {
                                //    return draft = task.data
                                //    return task.data
                                    Object.assign(draft, video.data)
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
    })
})


export const { useGetVideosQuery, useEditVideoMutation, useAddVideoMutation } = videosApi