import apiSlice from "../apiSlice";
import { getProductShowItems } from "./projectsSlice";


export const projectsApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getProjects : builder.query({
            query: () => ({
                url: "/projects",
                method: "GET",
            }),
            // query:  "/projects", // error

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const projectsdata = await queryFulfilled;
                    if (projectsdata?.data?.length > 0) {
                        // update conversation cache pessimistically start
                        const shows = projectsdata.data.map(proj => {
                            return proj.projectName
                        })
                        // console.log(shows);
                        dispatch(
                            getProductShowItems(shows)                  
                            
                        );
                        // update messages cache pessimistically end
                    }
                } catch (err) {}
            },
        }) 
    })
})


export const { useGetProjectsQuery } = projectsApi