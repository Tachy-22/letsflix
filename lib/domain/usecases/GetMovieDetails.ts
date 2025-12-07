import { MovieRepository } from '../repositories/MovieRepository';
import { MovieDetails } from '../../../types/movie';

export class GetMovieDetails {
  constructor(private movieRepository: MovieRepository) {}

  async execute(id: number): Promise<MovieDetails> {
    return this.movieRepository.getMovieDetails(id);
  }
}