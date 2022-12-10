import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/movieSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

// console.log(store.getState());

// console.log(store);
// const startingState = store.getState();
// console.log(startingState);

// store.dispatch({
//   type: "song/addSong",
//   payload: "new song",
// });

// store.dispatch(songsSlice.actions.addSong("belle chao"));

// const finalState = store.getState();
// console.log(finalState);

// console.log(songsSlice);

export { store };
export { addSong, removeSong, addMovie, removeMovie };
// export const { addSong } = createSlice.actions;
