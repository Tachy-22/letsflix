import { MovieRepository } from '../domain/repositories/MovieRepository';
import { Movie, MovieDetails, MovieResponse, SearchResult } from '../../types/movie';
import { tmdbClient } from '../api/tmdbClient';
import { API_ENDPOINTS } from '../../constants/api';

export class MovieRepositoryImpl implements MovieRepository {
  async getPopularMovies(page: number = 1): Promise<MovieResponse> {
    return tmdbClient.get<MovieResponse>(API_ENDPOINTS.POPULAR_MOVIES, { page });
  }

  async getTopRatedMovies(page: number = 1): Promise<MovieResponse> {
    return tmdbClient.get<MovieResponse>(API_ENDPOINTS.TOP_RATED_MOVIES, { page });
  }

  async getNowPlayingMovies(page: number = 1): Promise<MovieResponse> {
    return tmdbClient.get<MovieResponse>(API_ENDPOINTS.NOW_PLAYING_MOVIES, { page });
  }

  async getUpcomingMovies(page: number = 1): Promise<MovieResponse> {
    return tmdbClient.get<MovieResponse>(API_ENDPOINTS.UPCOMING_MOVIES, { page });
  }

  async getMovieDetails(id: number): Promise<MovieDetails> {
    return tmdbClient.get<MovieDetails>(API_ENDPOINTS.MOVIE_DETAILS(id));
  }

  async searchMovies(query: string, page: number = 1): Promise<SearchResult> {
    return tmdbClient.get<SearchResult>(API_ENDPOINTS.SEARCH_MOVIES, { query, page });
  }
}