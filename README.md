# 🎬 Letsflix - TMDB Movie Discovery App

> My first React Native project - A beautiful movie discovery app inspired by The Movie Database (TMDB)

![React Native](https://img.shields.io/badge/React%20Native-0.74-blue?style=flat-square&logo=react)
![Expo](https://img.shields.io/badge/Expo-~54.0-black?style=flat-square&logo=expo)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)
![NativeWind](https://img.shields.io/badge/NativeWind-4.2-06B6D4?style=flat-square&logo=tailwindcss)

## 📱 About

Letsflix is a movie discovery mobile application built with React Native and Expo. As my first venture into React Native development, this project showcases modern mobile app development practices, clean architecture principles, and beautiful UI design inspired by TMDB's official interface.

## ✨ Features

### 🎭 Core Features
- **Movie Discovery**: Browse popular, now playing, top-rated, and upcoming movies
- **Advanced Search**: Real-time movie search with beautiful grid layout
- **Movie Details**: Comprehensive movie information with backdrop images, cast details, and ratings
- **Trending Content**: Daily and weekly trending movies
- **Watchlist**: Personal movie watchlist (coming soon)

### 🎨 UI/UX Features
- **TMDB-Inspired Design**: Authentic color scheme and layout matching TMDB
- **Dark Theme**: Beautiful dark interface with gradient headers
- **Responsive Design**: Optimized for both iOS and Android devices
- **Smooth Animations**: Polished transitions and interactive elements
- **Safe Area Support**: Proper handling of notches and status bars

### 🏗️ Technical Features
- **Clean Architecture**: Separation of concerns with domain, data, and presentation layers
- **Type Safety**: Full TypeScript implementation
- **State Management**: React Query for efficient data fetching and caching
- **File-based Routing**: Expo Router for seamless navigation
- **Image Optimization**: Expo Image for fast, cached image loading

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React Native with Expo |
| **Language** | TypeScript |
| **Styling** | NativeWind (Tailwind CSS for React Native) |
| **Navigation** | Expo Router |
| **State Management** | React Query (@tanstack/react-query) |
| **HTTP Client** | Axios |
| **Images** | Expo Image |
| **Icons** | Expo Vector Icons |
| **API** | The Movie Database (TMDB) API |

## 🏗️ Project Architecture

```
📦 Letsflix/
├── 📁 app/                    # File-based routing (Expo Router)
│   ├── 📁 (tabs)/            # Tab navigation screens
│   │   ├── index.tsx         # Home - Movie listings
│   │   ├── search.tsx        # Search functionality
│   │   ├── trending.tsx      # Trending movies
│   │   └── watchlist.tsx     # Personal watchlist
│   ├── 📁 movie/
│   │   └── [id].tsx          # Dynamic movie details page
│   ├── _layout.tsx           # Root layout with providers
│   └── globals.css           # Global styles
├── 📁 components/             # Reusable UI components
│   ├── MovieCard.tsx         # Individual movie card
│   └── MovieList.tsx         # Horizontal movie list
├── 📁 hooks/                  # Custom React hooks
│   └── useMovies.ts          # Movie-related API hooks
├── 📁 lib/                    # Business logic (Clean Architecture)
│   ├── 📁 domain/            # Business entities and rules
│   │   ├── 📁 repositories/  # Repository interfaces
│   │   └── 📁 usecases/      # Business use cases
│   ├── 📁 data/              # Data layer implementation
│   │   └── MovieRepositoryImpl.ts
│   └── 📁 api/               # HTTP client configuration
│       └── tmdbClient.ts
├── 📁 types/                  # TypeScript type definitions
│   └── movie.ts              # Movie-related types
├── 📁 constants/              # App constants and configuration
│   └── api.ts                # API endpoints and config
└── 📁 utils/                  # Utility functions
    └── imageUtils.ts         # Image URL generation helpers
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development) or Android Emulator (for Android development)
- TMDB API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/letsflix.git
   cd letsflix
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Add your TMDB API key to `.env`:
   ```env
   EXPO_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. **Get TMDB API Key**
   - Sign up at [The Movie Database](https://www.themoviedb.org/)
   - Go to Settings → API
   - Copy your API Read Access Token

5. **Start the development server**
   ```bash
   npx expo start
   ```

6. **Run on device/emulator**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Scan QR code with Expo Go app for physical device

## 🎯 Learning Outcomes

This project represents my first foray into React Native development and has been an incredible learning experience:

### 🧠 What I Learned
- **React Native Fundamentals**: Components, navigation, and platform-specific development
- **Expo Ecosystem**: File-based routing, managed workflow, and native modules
- **Mobile UI/UX**: Responsive design, safe areas, and mobile-first thinking
- **Clean Architecture**: Separation of concerns and maintainable code structure
- **State Management**: Efficient data fetching and caching with React Query
- **TypeScript in Mobile**: Type safety in React Native applications
- **API Integration**: Working with RESTful APIs and image handling
- **Mobile Performance**: Optimizing for mobile devices and different screen sizes

### 🎨 Design Principles Applied
- **Consistency**: Following TMDB's design language and color scheme
- **Accessibility**: Proper contrast ratios and touch targets
- **Performance**: Lazy loading and efficient image caching
- **User Experience**: Smooth animations and intuitive navigation

## 🔮 Future Enhancements

- [ ] **Watchlist Functionality**: Add/remove movies from personal watchlist
- [ ] **User Authentication**: Login with TMDB account
- [ ] **Movie Reviews**: Read and write movie reviews
- [ ] **Advanced Filters**: Filter by genre, year, rating, etc.
- [ ] **Offline Support**: Cache movies for offline viewing
- [ ] **TV Shows**: Extend functionality to include TV series
- [ ] **Social Features**: Share movies and create lists
- [ ] **Push Notifications**: Notify about new releases and trending movies

## 🤝 Contributing

As this is my first React Native project and a learning experience, I welcome feedback, suggestions, and contributions! Feel free to:

- Report bugs or issues
- Suggest new features
- Improve the code or documentation
- Share your thoughts on the architecture

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [Expo Team](https://expo.dev/) for the amazing development platform
- React Native community for excellent documentation and resources
- Tailwind CSS team for NativeWind

---

*Built with ❤️ as my first React Native project*
