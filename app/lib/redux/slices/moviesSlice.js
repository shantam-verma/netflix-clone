const { createSlice } = require("@reduxjs/toolkit");

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trailer: null,
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
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
  },
});

export const {
  addTrailers,
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
