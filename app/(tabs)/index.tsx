import React from "react";
import { View, ScrollView, StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MovieList } from "../../components/MovieList";
import { usePopularMovies, useTopRatedMovies, useNowPlayingMovies, useUpcomingMovies } from "../../hooks/useMovies";

export default function Home() {
  const { data: popularMovies, isLoading: popularLoading } = usePopularMovies();
  const { data: topRatedMovies, isLoading: topRatedLoading } = useTopRatedMovies();
  const { data: nowPlayingMovies, isLoading: nowPlayingLoading } = useNowPlayingMovies();
  const { data: upcomingMovies, isLoading: upcomingLoading } = useUpcomingMovies();

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <StatusBar barStyle="light-content" backgroundColor="#032541" />
      <ScrollView className="flex-1 bg-slate-900">
        {/* Hero Header */}
        <View className="bg-gradient-to-r from-blue-900 to-green-800 px-4 py-8">
          <Text className="text-white text-3xl font-bold mb-2">Letsflix</Text>
          <Text className="text-blue-200 text-base">
            Discover movies, TV shows and more
          </Text>
        </View>

        <View className="py-4">
          <MovieList 
            title="Popular Movies"
            movies={popularMovies?.results || []}
            isLoading={popularLoading}
          />
          
          <MovieList 
            title="Now Playing"
            movies={nowPlayingMovies?.results || []}
            isLoading={nowPlayingLoading}
          />
          
          <MovieList 
            title="Top Rated"
            movies={topRatedMovies?.results || []}
            isLoading={topRatedLoading}
          />
          
          <MovieList 
            title="Upcoming"
            movies={upcomingMovies?.results || []}
            isLoading={upcomingLoading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}