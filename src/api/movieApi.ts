import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "fa0f0efc506bfc34ac0e58292253fb19";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    // getMovies: builder.query({
    //   query: (url) => `${url}&api_key=${API_KEY}`,
    // }),

    getMovies: builder.query<any, void>({
      query: () =>
        `/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`,
    }),
    getPopular: builder.query<any, void>({
      query: () => `/movie/popular?language=en-US&page=1&api_key=${API_KEY}`,
    }),
    getTopRated: builder.query<any, void>({
      query: () => `/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
    }),
    getUpcoming: builder.query<any, void>({
      query: () => `/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`,
    }),
    getMovieDetails: builder.query<any, any>({
      query: (id: string | number) => `/movie/${id}?api_key=${API_KEY}`,
    }),
    searchMovies: builder.query<any, string>({
      query: (query) => `/search/movie?query=${query}&api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
  useSearchMoviesQuery,
  useGetPopularQuery,
  useGetMovieDetailsQuery,
} = moviesApi;
