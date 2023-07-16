import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    getAllBooks: builder.query({
      query: () => "/books/all",
    }),
    getBookSearch: builder.query({
      query: (value: string) => `/books?searchTerm=${value}`,
    }),
  }),
});

export const { useGetBooksQuery, useGetAllBooksQuery, useGetBookSearchQuery } =
  api;
