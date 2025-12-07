import { useQuery } from '@tanstack/react-query';
import { MovieRepositoryImpl } from '../lib/data/MovieRepositoryImpl';
import { GetPopularMovies } from '../lib/domain/usecases/GetPopularMovies';
import { GetMovieDetails } from '../lib/domain/usecases/GetMovieDetails';
import { SearchMovies } from '../lib/domain/usecases/SearchMovies';

const movieRepository = new MovieRepositoryImpl();
const getPopularMovies = new GetPopularMovies(movieRepository);
const getMovieDetails = new GetMovieDetails(movieRepository);
const searchMovies = new SearchMovies(movieRepository);

export const usePopularMovies = (page: number = 1) => {
  return useQuery({
    queryKey: ['movies', 'popular', page],
    queryFn: () => getPopularMovies.execute(page),
  });
};

export const useTopRatedMovies = (page: number = 1) => {
  return useQuery({
    queryKey: ['movies', 'top-rated', page],
    queryFn: () => movieRepository.getTopRatedMovies(page),
  });
};

export const useNowPlayingMovies = (page: number = 1) => {
  return useQuery({
    queryKey: ['movies', 'now-playing', page],
    queryFn: () => movieRepository.getNowPlayingMovies(page),
  });
};

export const useUpcomingMovies = (page: number = 1) => {
  return useQuery({
    queryKey: ['movies', 'upcoming', page],
    queryFn: () => movieRepository.getUpcomingMovies(page),
  });
};

export const useMovieDetails = (id: number) => {
  return useQuery({
    queryKey: ['movies', 'details', id],
    queryFn: () => getMovieDetails.execute(id),
    enabled: !!id,
  });
};

export const useSearchMovies = (query: string, page: number = 1) => {
  return useQuery({
    queryKey: ['movies', 'search', query, page],
    queryFn: () => searchMovies.execute(query, page),
    enabled: !!query.trim(),
  });
};