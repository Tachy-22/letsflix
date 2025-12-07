export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
  API_KEY: process.env.EXPO_PUBLIC_TMDB_API_KEY || '',
} as const;

export const IMAGE_SIZES = {
  POSTER: {
    SMALL: 'w185',
    MEDIUM: 'w342',
    LARGE: 'w500',
    ORIGINAL: 'original',
  },
  BACKDROP: {
    SMALL: 'w300',
    MEDIUM: 'w780',
    LARGE: 'w1280',
    ORIGINAL: 'original',
  },
  PROFILE: {
    SMALL: 'w45',
    MEDIUM: 'w185',
    LARGE: 'h632',
    ORIGINAL: 'original',
  },
} as const;

export const API_ENDPOINTS = {
  POPULAR_MOVIES: '/movie/popular',
  TOP_RATED_MOVIES: '/movie/top_rated',
  NOW_PLAYING_MOVIES: '/movie/now_playing',
  UPCOMING_MOVIES: '/movie/upcoming',
  MOVIE_DETAILS: (id: number) => `/movie/${id}`,
  SEARCH_MOVIES: '/search/movie',
  GENRES: '/genre/movie/list',
} as const;