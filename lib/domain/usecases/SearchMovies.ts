import { MovieRepository } from '../repositories/MovieRepository';
import { SearchResult } from '../../../types/movie';

export class SearchMovies {
  constructor(private movieRepository: MovieRepository) {}

  async execute(query: string, page: number = 1): Promise<SearchResult> {
    return this.movieRepository.searchMovies(query, page);
  }
}