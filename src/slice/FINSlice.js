import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const FINSlice = createApi({
  reducerPath: 'finApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://lgwoplzp8d.execute-api.eu-north-1.amazonaws.com/api',
  }),
  tagTypes: ['FINNews'],
  endpoints: (builder) => ({
    getFINNews: builder.query({
      query: () => 'FINNews',
      providesTags: (result) =>
        result
          ? [...Object.keys(result).map((key) => ({ type: 'FINNews', id: key })), { type: 'FINNews', id: 'LIST' }]
          : [{ type: 'FINNews', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetFINNewsQuery,
  useLazyGetFINNewsQuery,
} = FINSlice;
