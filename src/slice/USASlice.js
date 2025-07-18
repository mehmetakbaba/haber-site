import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const USAApiSlice = createApi({
  reducerPath: 'usaApi', 
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://4yql9tv0fa.execute-api.eu-north-1.amazonaws.com/api',
  }),
  tagTypes: ['USAFunc'],
  endpoints: (builder) => ({
    getUSANews: builder.query({
      query: () => 'USAFunc',
      providesTags: (result) =>
        result
          ? [...Object.keys(result).map((key) => ({ type: 'USAFunc', id: key })), { type: 'USAFunc', id: 'LIST' }]
          : [{ type: 'USAFunc', id: 'LIST' }],
    }),
  }),
});


export const {
  useGetUSANewsQuery,
  useLazyGetUSANewsQuery, 
} = USAApiSlice;
