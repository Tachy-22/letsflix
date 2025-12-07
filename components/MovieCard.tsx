import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { Movie } from '../types/movie';
import { getPosterUrl } from '../utils/imageUtils';

interface MovieCardProps {
  movie: Movie;
  onPress: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onPress }) => {
  const posterUrl = getPosterUrl(movie.poster_path);
  
  // Debug logging
  React.useEffect(() => {
    console.log('Movie:', movie.title);
    console.log('Poster path:', movie.poster_path);
    console.log('Generated URL:', posterUrl);
  }, [movie.title, movie.poster_path, posterUrl]);

  return (
    <Pressable 
      onPress={onPress}
      className="w-40 mr-3 bg- rounded-lg shadow-sm overflow-hidden"
    >
      <View className="aspect-[2/3] bg-gray-200">
        {posterUrl ? (
          <Image
            source={{ uri: posterUrl }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
            onError={(error) => {
              console.log('Image error:', error);
              console.log('URL:', posterUrl);
            }}
          />
        ) : (
          <View className="w-full h-full bg-gray-300 justify-center items-center">
            <Text className="text-gray-500 text-xs">No Image</Text>
          </View>
        )}
      </View>
      
      <View className="p-3">
        <Text 
          className="font-semibold text-sm text-gray-100 leading-4" 
          numberOfLines={2}
        >
          {movie.title}
        </Text>
        
        <Text className="text-xs text-gray-300 mt-1">
          {new Date(movie.release_date).getFullYear() || 'TBA'}
        </Text>
        
        <View className="flex-row items-center mt-1">
          <Text className="text-xs text-yellow-600">⭐</Text>
          <Text className="text-xs text-gray-300 ml-1">
            {movie.vote_average.toFixed(1)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};