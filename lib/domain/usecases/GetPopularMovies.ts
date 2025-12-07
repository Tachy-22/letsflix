import { MovieRepository } from '../repositories/MovieRepository';
import { MovieResponse } from '../../../types/movie';

export class GetPopularMovies {
  constructor(private movieRepository: MovieRepository) {}

  async execute(page: number = 1): Promise<MovieResponse> {
    return this.movieRepository.getPopularMovies(page);
  }
}