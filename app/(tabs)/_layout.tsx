import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#0d253f',
          borderTopWidth: 1,
          borderTopColor: '#01b4e4',
          height: Platform.OS === 'ios' ? 90 : 70,
          paddingBottom: Platform.OS === 'ios' ? 25 : 10,
          paddingTop: 10,
          elevation: 8,
          shadowColor: '#01b4e4',
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },
        tabBarActiveTintColor: '#01b4e4',
        tabBarInactiveTintColor: '#90cea1',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
        tabBarIconStyle: {
          marginBottom: -4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Movies',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? 'film' : 'film-outline'} 
              size={focused ? 26 : 22} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? 'search' : 'search-outline'} 
              size={focused ? 26 : 22} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="trending"
        options={{
          title: 'Trending',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? 'trending-up' : 'trending-up-outline'} 
              size={focused ? 26 : 22} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="watchlist"
        options={{
          title: 'Watchlist',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? 'bookmark' : 'bookmark-outline'} 
              size={focused ? 26 : 22} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}