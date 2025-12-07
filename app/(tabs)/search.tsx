import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSearchMovies } from '../../hooks/useMovies';
import { MovieCard } from '../../components/MovieCard';
import { router } from 'expo-router';

export default function Search() {
  const [query, setQuery] = useState('');
  const { data: searchResults, isLoading } = useSearchMovies(query);

  const handleMoviePress = (movieId: number) => {
    router.push(`/movie/${movieId}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <StatusBar barStyle="light-content" backgroundColor="#032541" />
      <View className="flex-1 bg-slate-900">
        {/* Search Header */}
        <View className="bg-gradient-to-r from-indigo-900 to-purple-800 px-4 py-8">
          <Text className="text-white text-3xl font-bold mb-2">Search</Text>
          <Text className="text-indigo-200 text-base mb-6">
            Find your favorite movies and discover new ones
          </Text>
          <View className="bg-white rounded-xl shadow-lg">
            <TextInput
              className="px-6 py-4 text-lg text-gray-800 rounded-xl"
              placeholder="Search for movies..."
              placeholderTextColor="#9CA3AF"
              value={query}
              onChangeText={setQuery}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>

        {/* Search Results */}
        {query.trim() === '' ? (
          <View className="flex-1 justify-center items-center">
            <Text className="text-gray-400 text-lg">Enter a movie title to search</Text>
          </View>
        ) : isLoading ? (
          <View className="flex-1 justify-center items-center">
            <Text className="text-white text-lg">Searching...</Text>
          </View>
        ) : searchResults?.results.length === 0 ? (
          <View className="flex-1 justify-center items-center">
            <Text className="text-gray-400 text-lg">No movies found</Text>
            <Text className="text-gray-500 text-sm mt-2">Try a different search term</Text>
          </View>
        ) : (
          <FlatList
            data={searchResults?.results || []}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={{ padding: 16 }}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => (
              <View className="w-[48%] mb-4">
                <MovieCard 
                  movie={item} 
                  onPress={() => handleMoviePress(item.id)}
                />
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}