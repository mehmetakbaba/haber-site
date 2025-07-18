import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const FRSlice = createApi({
  reducerPath: 'frApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://4yql9tv0fa.execute-api.eu-north-1.amazonaws.com/api',
  }),
  tagTypes: ['FRFunc'],
  endpoints: (builder) => ({
    getFRNews: builder.query({
      query: () => 'FRFunc',
      providesTags: (result) =>
        result
          ? [...Object.keys(result).map((key) => ({ type: 'FRFunc', id: key })), { type: 'FRFunc', id: 'LIST' }]
          : [{ type: 'FRFunc', id: 'LIST' }],
    }),
  }),
});


export const {
  useGetFRNewsQuery,
  useLazyGetFRNewsQuery, 
} = FRSlice;
