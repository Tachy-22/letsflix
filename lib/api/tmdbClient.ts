import axios, { AxiosInstance } from 'axios';
import { TMDB_CONFIG } from '../../constants/api';

class TMDBClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: TMDB_CONFIG.BASE_URL,
      headers: {
        'Authorization': `Bearer ${TMDB_CONFIG.API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const response = await this.client.get(endpoint, { params });
    return response.data;
  }
}

export const tmdbClient = new TMDBClient();