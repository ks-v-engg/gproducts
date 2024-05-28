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
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductByNameQuery,useGetuserdetailsQuery } = gpstoreApi