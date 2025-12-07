import { TMDB_CONFIG, IMAGE_SIZES } from '../constants/api';

export const getImageUrl = (
  path: string | null,
  size: string = IMAGE_SIZES.POSTER.MEDIUM
): string | null => {
  if (!path) return null;
  return `${TMDB_CONFIG.IMAGE_BASE_URL}/${size}${path}`;
};

export const getPosterUrl = (
  path: string | null,
  size: keyof typeof IMAGE_SIZES.POSTER = 'MEDIUM'
): string | null => {
  if (!path) return null;
  return getImageUrl(path, IMAGE_SIZES.POSTER[size]);
};

export const getBackdropUrl = (
  path: string | null,
  size: keyof typeof IMAGE_SIZES.BACKDROP = 'MEDIUM'
): string | null => {
  if (!path) return null;
  return getImageUrl(path, IMAGE_SIZES.BACKDROP[size]);
};