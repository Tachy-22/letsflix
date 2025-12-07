import React, { useState } from 'react';
import { View, Text, ScrollView, StatusBar, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MovieList } from '../../components/MovieList';
import { usePopularMovies } from '../../hooks/useMovies';

export default function Trending() {
  const [timeWindow, setTimeWindow] = useState<'day' | 'week'>('day');
  const { data: trendingMovies, isLoading } = usePopularMovies();

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <StatusBar barStyle="light-content" backgroundColor="#032541" />
      <ScrollView className="flex-1 bg-slate-900">
        {/* Header */}
        <View className="bg-gradient-to-r from-blue-900 to-blue-800 px-4 py-8">
          <Text className="text-white text-3xl font-bold mb-4">Trending</Text>
          
          {/* Time Window Toggle */}
          <View className="flex-row bg-slate-800 rounded-full p-1">
            <Pressable
              onPress={() => setTimeWindow('day')}
              className={`flex-1 py-2 px-4 rounded-full ${
                timeWindow === 'day' ? 'bg-blue-500' : 'bg-transparent'
              }`}
            >
              <Text className={`text-center font-semibold ${
                timeWindow === 'day' ? 'text-white' : 'text-gray-400'
              }`}>
                Today
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setTimeWindow('week')}
              className={`flex-1 py-2 px-4 rounded-full ${
                timeWindow === 'week' ? 'bg-blue-500' : 'bg-transparent'
              }`}
            >
              <Text className={`text-center font-semibold ${
                timeWindow === 'week' ? 'text-white' : 'text-gray-400'
              }`}>
                This Week
              </Text>
            </Pressable>
          </View>
        </View>

        <View className="py-4">
          <MovieList 
            title={`Trending ${timeWindow === 'day' ? 'Today' : 'This Week'}`}
            movies={trendingMovies?.results || []}
            isLoading={isLoading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}