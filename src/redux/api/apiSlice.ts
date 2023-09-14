/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["reviews", "favorite", "AddBook", "deleteBook"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["favorite", "AddBook", "deleteBook"],
    }),
    getAllBooks: builder.query({
      query: () => "/books/all",
      providesTags: ["favorite", "AddBook", "deleteBook"],
    }),
    getBookSearch: builder.query({
      query: (value: string) => `/books?searchTerm=${value}`,
      providesTags: ["favorite", "AddBook", "deleteBook"],
    }),
    getGenreFind: builder.query({
      query: (value: string) => `/books?genre=${value}`,
    }),
    getPublicationYearFind: builder.query({
      query: (value: string) => `/books?publicationDate=${value}`,
    }),
    getBookDetails: builder.query({
      query: (id: string) => `/books/details/${id}`,
      providesTags: ["favorite", "AddBook", "deleteBook"],
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
      invalidatesTags: ["AddBook"],
    }),
    updateBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: ({ id }) => ({
        url: `/books/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteBook"],
    }),
    postFavorite: builder.mutation({
      query: ({ data }) => ({
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        url: `/favorite`,
        method: "POST",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: data,
      }),
      invalidatesTags: ["favorite"],
    }),
    getFavorite: builder.query({
      query: () => `/favorite`,
      providesTags: ["favorite"],
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
  useGetPublicationYearFindQuery,
  useUpdateBookMutation,
  usePostFavoriteMutation,
  useGetFavoriteQuery,
} = api;
