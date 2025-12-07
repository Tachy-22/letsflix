import React from 'react';
import { View, Text, ScrollView, StatusBar, Pressable, Image } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useMovieDetails } from '../../hooks/useMovies';
import { getBackdropUrl, getPosterUrl } from '../../utils/imageUtils';

export default function MovieDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const movieId = parseInt(id as string);
  const { data: movie, isLoading, error } = useMovieDetails(movieId);

  if (isLoading) {
    return (
      <View className="flex-1 bg-slate-900 justify-center items-center">
        <Text className="text-white text-lg">Loading...</Text>
      </View>
    );
  }

  if (error || !movie) {
    return (
      <View className="flex-1 bg-slate-900 justify-center items-center">
        <Text className="text-white text-lg">Error loading movie details</Text>
        <Pressable 
          onPress={() => router.back()}
          className="mt-4 bg-blue-600 px-6 py-3 rounded-lg"
        >
          <Text className="text-white font-semibold">Go Back</Text>
        </Pressable>
      </View>
    );
  }

  const backdropUrl = getBackdropUrl(movie.backdrop_path, 'LARGE');
  const posterUrl = getPosterUrl(movie.poster_path, 'LARGE');

  // Debug logging
  console.log('Movie details:', movie.title);
  console.log('Backdrop path:', movie.backdrop_path);
  console.log('Backdrop URL:', backdropUrl);
  console.log('Poster path:', movie.poster_path);
  console.log('Poster URL:', posterUrl);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#032541" />
      <ScrollView className="flex-1 bg-slate-900">
        {/* Backdrop Image */}
        {backdropUrl && (
          <View className="h-64 relative">
            <Image
              source={{ uri: backdropUrl }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
              onError={(error) => console.log('Backdrop error:', error)}
            />
            <View className="absolute inset-0 bg-black bg-opacity-40" />
          </View>
        )}

        <View className="px-4 py-6">
          <View className="flex-row">
            {/* Poster */}
            <View className="w-32 h-48 bg-gray-700 rounded-lg overflow-hidden mr-4">
              {posterUrl ? (
                <Image
                  source={{ uri: posterUrl }}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="cover"
                  onError={(error) => console.log('Poster error:', error)}
                />
              ) : (
                <View className="w-full h-full justify-center items-center">
                  <Text className="text-gray-400 text-xs">No Image</Text>
                </View>
              )}
            </View>

            {/* Movie Info */}
            <View className="flex-1">
              <Text className="text-white text-2xl font-bold leading-7 mb-2">
                {movie.title}
              </Text>
              
              <Text className="text-gray-400 text-sm mb-2">
                {new Date(movie.release_date).getFullYear()} • {movie.runtime} min
              </Text>
              
              <View className="flex-row items-center mb-2">
                <Text className="text-yellow-400 text-lg">⭐</Text>
                <Text className="text-white text-lg ml-2 font-semibold">
                  {movie.vote_average.toFixed(1)}
                </Text>
                <Text className="text-gray-400 text-sm ml-1">
                  ({movie.vote_count.toLocaleString()} votes)
                </Text>
              </View>

              <View className="flex-row flex-wrap">
                {movie.genres.map((genre, index) => (
                  <View key={genre.id} className="bg-gray-800 px-3 py-1 rounded-full mr-2 mb-2">
                    <Text className="text-white text-xs">{genre.name}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Tagline */}
          {movie.tagline && (
            <View className="mt-6">
              <Text className="text-gray-400 italic text-lg">"{movie.tagline}"</Text>
            </View>
          )}

          {/* Overview */}
          <View className="mt-6">
            <Text className="text-white text-lg font-bold mb-3">Overview</Text>
            <Text className="text-gray-300 leading-6">
              {movie.overview || 'No overview available.'}
            </Text>
          </View>

          {/* Additional Info */}
          <View className="mt-6 space-y-4">
            <View>
              <Text className="text-white font-semibold">Status</Text>
              <Text className="text-gray-400">{movie.status}</Text>
            </View>

            {movie.budget > 0 && (
              <View>
                <Text className="text-white font-semibold">Budget</Text>
                <Text className="text-gray-400">${movie.budget.toLocaleString()}</Text>
              </View>
            )}

            {movie.revenue > 0 && (
              <View>
                <Text className="text-white font-semibold">Revenue</Text>
                <Text className="text-gray-400">${movie.revenue.toLocaleString()}</Text>
              </View>
            )}

            {movie.production_companies.length > 0 && (
              <View>
                <Text className="text-white font-semibold">Production Companies</Text>
                <Text className="text-gray-400">
                  {movie.production_companies.map(company => company.name).join(', ')}
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
}