const { createSlice } = require("@reduxjs/toolkit");

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trailer: null,
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    movieDetails: null,
  },
  reducers: {
    addTrailers: (state, actions) => {
      state.trailer = actions.payload;
    },
    addNowPlayingMovies: (state, actions) => {
      state.nowPlayingMovies = actions.payload;
    },
    addPopularMovies: (state, actions) => {
      state.popularMovies = actions.payload;
    },
    addTopRatedMovies: (store, actions) => {
      store.topRatedMovies = actions.payload;
    },
    addUpcomingMovies: (store, action) => {
      store.upcomingMovies = action.payload;
    },
    addMovieDtails: (state, action) => {
      state.movieDetails = action.payload;
    },
    clearMovieDetails: (state) => {
      state.movieDetails = null;
    },
  },
});

export const {
  addTrailers,
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMovieDtails,
  clearMovieDetails,
} = moviesSlice.actions;
export default moviesSlice.reducer;
