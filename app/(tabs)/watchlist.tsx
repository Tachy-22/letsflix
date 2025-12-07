import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Watchlist() {
  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <StatusBar barStyle="light-content" backgroundColor="#032541" />
      <ScrollView className="flex-1 bg-slate-900">
        {/* Header */}
        <View className="bg-gradient-to-r from-purple-900 to-purple-800 px-4 py-8">
          <Text className="text-white text-3xl font-bold mb-2">My Watchlist</Text>
          <Text className="text-purple-200 text-base">
            Keep track of movies you want to watch
          </Text>
        </View>

        {/* Empty State */}
        <View className="flex-1 justify-center items-center px-8 py-16">
          <Ionicons name="bookmark-outline" size={80} color="#6B7280" />
          <Text className="text-white text-xl font-semibold mt-6 text-center">
            Your watchlist is empty
          </Text>
          <Text className="text-gray-400 text-base mt-3 text-center leading-6">
            Browse movies and add them to your watchlist to keep track of what you want to watch later.
          </Text>
          
          <View className="mt-8 bg-blue-600 px-6 py-3 rounded-lg">
            <Text className="text-white font-semibold">Explore Movies</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}