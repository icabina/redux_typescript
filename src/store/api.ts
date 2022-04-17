import {createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//RTK
const DOGS_API_KEY = "3509a8d4-a911-4075-8362-beae11efe3d2";

interface Breed{
    id: string;
    name: string;
    image: {
        url: string;
    }
}

export const apiSlice = createApi({
    reducerPath: 'api', //Where is the data in reducer
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.thedogapi.com/v1",
        prepareHeaders(headers){
            headers.set("x-api-key", DOGS_API_KEY);
            return headers;
        }
    }),
    endpoints(builder){
        return {
            fecthBreeds: builder.query<Breed[], number|void>({
                query(limit = 10){
                    return `/breeds?limit=${limit}`;
                }
            })
        }
    }
})

export const {useFecthBreedsQuery} = apiSlice; //ctrl + space
//RTK creates hook to query
