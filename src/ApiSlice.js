
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ApiSlice = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pw63lzvyo7.execute-api.eu-central-1.amazonaws.com/default' }), 
  tagTypes: ['addCustomer'],
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => 'addCustomer', 
      providesTags: (result) =>
        result
          ? [...Object.keys(result).map((key) => ({ type: 'News', id: key })), { type: 'News', id: 'LIST' }]
          : [{ type: 'News', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetNewsQuery,
} = ApiSlice;
