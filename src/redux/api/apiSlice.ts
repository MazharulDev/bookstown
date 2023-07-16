/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface IProps {
  id: string;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["reviews"],
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
    getGenreFind: builder.query({
      query: (value: string) => `/books?genre=${value}`,
    }),
    getBookDetails: builder.query({
      query: (id: string) => `/books/details/${id}`,
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        url: `/books/review/${id}`,
        method: "POST",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getReviews: builder.query({
      query: (id: string) => `/books/review/${id}`,
      providesTags: ["reviews"],
    }),
    postBook: builder.mutation({
      query: ({ data }) => ({
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        url: `/books`,
        method: "POST",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: ({ id }) => ({
        url: `/books/book/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetAllBooksQuery,
  useGetBookSearchQuery,
  useGetGenreFindQuery,
  useGetBookDetailsQuery,
  usePostReviewMutation,
  useGetReviewsQuery,
  usePostBookMutation,
  useDeleteBookMutation,
} = api;
