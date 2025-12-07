import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Movie } from '../types/movie';
import { MovieCard } from './MovieCard';
import { router } from 'expo-router';

interface MovieListProps {
  title: string;
  movies: Movie[];
  isLoading?: boolean;
}

export const MovieList: React.FC<MovieListProps> = ({ 
  title, 
  movies, 
  isLoading 
}) => {
  const handleMoviePress = (movieId: number) => {
    router.push(`/movie/${movieId}`);
  };

  if (isLoading) {
    return (
      <View className="mb-6">
        <Text className="text-xl font-bold text-white mx-4 mb-4">{title}</Text>
        <View className="flex-row px-4">
          {[...Array(3)].map((_, index) => (
            <View 
              key={index} 
              className="w-40 h-64 bg-gray-700 rounded-lg mr-3 animate-pulse"
            />
          ))}
        </View>
      </View>
    );
  }

  return (
    <View className="mb-6">
      <Text className="text-xl font-bold text-white mx-4 mb-4">{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <MovieCard 
            movie={item} 
            onPress={() => handleMoviePress(item.id)}
          />
        )}
      />
    </View>
  );
};