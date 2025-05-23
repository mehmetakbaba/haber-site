import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const USAApiSlice = createApi({
  reducerPath: 'usaApi', 
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://db8yrbzr13.execute-api.eu-north-1.amazonaws.com/api',
  }),
  tagTypes: ['USNews'],
  endpoints: (builder) => ({
    getUSANews: builder.query({
      query: () => 'USNews',
      providesTags: (result) =>
        result
          ? [...Object.keys(result).map((key) => ({ type: 'USNews', id: key })), { type: 'USNews', id: 'LIST' }]
          : [{ type: 'USNews', id: 'LIST' }],
    }),
  }),
});


export const {
  useGetUSANewsQuery,
  useLazyGetUSANewsQuery, 
} = USAApiSlice;
