import "./globals.css"

import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack 
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen 
          name="movie/[id]" 
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: '#032541',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: 'Movie Details',
            presentation: 'card',
          }} 
        />
      </Stack>
    </QueryClientProvider>
  );
}
