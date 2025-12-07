import { Movie, MovieDetails, MovieResponse, SearchResult } from '../../../types/movie';

export interface MovieRepository {
  getPopularMovies(page?: number): Promise<MovieResponse>;
  getTopRatedMovies(page?: number): Promise<MovieResponse>;
  getNowPlayingMovies(page?: number): Promise<MovieResponse>;
  getUpcomingMovies(page?: number): Promise<MovieResponse>;
  getMovieDetails(id: number): Promise<MovieDetails>;
  searchMovies(query: string, page?: number): Promise<SearchResult>;
}