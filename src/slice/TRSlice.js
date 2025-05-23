import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const TRSlice = createApi({
  reducerPath: 'trApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://lgwoplzp8d.execute-api.eu-north-1.amazonaws.com/api' }),
  tagTypes: ['TRNews'],
  endpoints: (builder) => ({
    getTRNews: builder.query({
      query: () => 'TRNews',
      providesTags: (result) =>
        result
          ? [
              
              ...Object.keys(result).map((key) => ({ type: 'TRNews', id: key })),
              { type: 'TRNews', id: 'LIST' },
            ]
          : [{ type: 'TRNews', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetTRNewsQuery,
  useLazyGetTRNewsQuery,
} = TRSlice;
