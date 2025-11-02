import { configureStore } from "@reduxjs/toolkit";
import catsBreedsReducer from "../features/catsBreeds/catsBreedsSlice";

import catsImagesReducer from "../features/catsImages/catsImagesSlice";

export const store = configureStore({
  reducer: {
    cats: catsImagesReducer,
    breed: catsBreedsReducer
  },
});
