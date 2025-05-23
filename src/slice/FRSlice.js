import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const FRSlice = createApi({
  reducerPath: 'frApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://db8yrbzr13.execute-api.eu-north-1.amazonaws.com/api',
  }),
  tagTypes: ['FRNews'],
  endpoints: (builder) => ({
    getFRNews: builder.query({
      query: () => 'FRNews',
      providesTags: (result) =>
        result
          ? [...Object.keys(result).map((key) => ({ type: 'FRNews', id: key })), { type: 'FRNews', id: 'LIST' }]
          : [{ type: 'FRNews', id: 'LIST' }],
    }),
  }),
});


export const {
  useGetFRNewsQuery,
  useLazyGetFRNewsQuery, 
} = FRSlice;
