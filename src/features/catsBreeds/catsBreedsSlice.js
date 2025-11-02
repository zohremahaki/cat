import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCatsBreeds = createAsyncThunk(
  "catsBreeds/fetchCatsBreeds",
  async () => {
    const res = await axios.get("https://api.thecatapi.com/v1/breeds?limit=10&page=0");
    return res.data;
  }
);

const initialState = { list: [], status: "idle" };
const catsBreedsSlice = createSlice({
  name: "catsBreeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatsBreeds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCatsBreeds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchCatsBreeds.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setCatsBreeds } = catsBreedsSlice.actions;
export default catsBreedsSlice.reducer;
