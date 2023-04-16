import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    hhSize: null,
    kidsCount: null,
    kidsArray: [],
    savedWeeklyRecipes: { baby: [], adult: [] },
    likedRecipes: [],
  },
};

export const householdSlice = createSlice({
  name: "household",
  initialState,
  reducers: {
    addHousehold: (state, action) => {
      state.value.hhSize = action.payload.hhSize;
      state.value.kidsCount = action.payload.kidsCount;
      state.value.kidsArray.push(action.payload.kidsArray);
    },
    addWeeklyRecipes: (state, action) => {
      state.value.savedWeeklyRecipes = action.payload;
    },
    addLikedRecipe: (state, action) => {
      state.value.likedRecipes.push(action.payload);
    },
    removeLikedRecipe: (state, action) => {
      state.value.likedRecipes = state.value.likedRecipes.filter(
        (e) => e._id === action.payload
      );
    },
  },
});

export const {
  addHousehold,
  addWeeklyRecipes,
  addLikedRecipe,
  removeLikedRecipe,
} = householdSlice.actions;
export default householdSlice.reducer;
