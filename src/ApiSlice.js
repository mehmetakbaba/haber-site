
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ApiSlice = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://brapi-dev.eba-p88twaeg.eu-central-1.elasticbeanstalk.com/api' }), 
  tagTypes: ['News'],
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => 'News', 
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
