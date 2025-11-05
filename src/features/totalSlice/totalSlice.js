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
    increaseLimitImageCount(state, action) {
      state.limitImageCount += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCatsBreeds.pending, (state) => {
        state.statusBreeds = "loading";
      })
      .addCase(fetchCatsBreeds.fulfilled, (state, action) => {
        state.statusBreeds = "succeeded";
        state.listBreeds = action.payload;
      })
      .addCase(fetchCatsBreeds.rejected, (state, action) => {
        state.statusBreeds = "failed";
        state.error = action.error.message;
      })

      // Cats Images
      .addCase(fetchCatsList.pending, (state) => {
        state.statusCats = "loading";
      })
      .addCase(fetchCatsList.fulfilled, (state, action) => {
        state.statusCats = "succeeded";
        // state.listCats = action.payload;
        state.listCats = [...state.listCats, ...action.payload];
      })
      .addCase(fetchCatsList.rejected, (state, action) => {
        state.statusCats = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCatsBreeds, setListCats, increaseLimitImageCount } =
  totalSlice.actions;
export default totalSlice.reducer;
