import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCatsBreeds = createAsyncThunk(
  "catsBreeds/fetchCatsBreeds",
  async () => {
    const res = await axios.get(
      "https://api.thecatapi.com/v1/breeds?limit=10&page=0"
    );
    return res.data;
  }
);

export const fetchCatsList = createAsyncThunk(
  "catsImages/fetchCats",
  async ({ breedId, limit }) => {
    const res = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=${limit}`
    );

    return res.data;
  }
);

const initialState = {
  listCats: [],
  statusCats: "idle",
  statusBreeds: "idle",
  selectedBreed: "abys",
  listBreeds: [],
  limitImageCount: 10,
};

const totalSlice = createSlice({
  name: "total",
  initialState,
  reducers: {
    setCatsBreeds(state, action) {
      state.selectedBreed = action.payload;
      state.listCats = [];
      state.limitImageCount = 10;
    },
    setListCats(state, action) {
      state.listCats = action.payload;
    },

  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCatsBreeds.fulfilled, (state, action) => {
        state.statusBreeds = "succeeded";
        state.listBreeds = action.payload;
      })

      .addCase(fetchCatsList.fulfilled, (state, action) => {
        state.statusCats = "succeeded";
        state.listCats = [...state.listCats, ...action.payload];
      });
  },
});

export const { setCatsBreeds, setListCats, increaseLimitImageCount } =
  totalSlice.actions;
export default totalSlice.reducer;
