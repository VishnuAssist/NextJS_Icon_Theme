import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "fa0f0efc506bfc34ac0e58292253fb19";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    // getMovies: builder.query({
    //   query: (url) => `${url}&api_key=${API_KEY}`,
    // }),

    getMovies: builder.query({
  query: () => `/movie/popular?language=en-US&page=1&api_key=${API_KEY}`,
}),
    searchMovies: builder.query({
      query: (query) => `/search/movie?query=${query}&api_key=${API_KEY}`,
    }),
  }),
});

export const { useGetMoviesQuery, useSearchMoviesQuery } = moviesApi;
