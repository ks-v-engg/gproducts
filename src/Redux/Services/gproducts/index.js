// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const gpstoreApi = createApi({
  reducerPath: 'gpstoreAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://665430b01c6af63f4676c229.mockapi.io/' }),
  endpoints: (builder) => ({
    getProductByName: builder.query({
      query: () => `/product`,
    }),
    getuserdetails: builder.query({
      query: () => `/users`,
    }),
      getProductById: builder.query({
        query: (id) => `product/${id}`,
      }),
    
        getProducts: builder.query({
          query: () => 'products',
        }),


    // To add a new user
    createuser : builder.mutation({
      query: (payload) => ({
          url: "/users",
          method: "POST",
          body: payload
      })
  }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductByNameQuery,useGetuserdetailsQuery,useCreateuserMutation,useGetProductByIdQuery } = gpstoreApi;