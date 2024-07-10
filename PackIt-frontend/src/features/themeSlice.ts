import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    activeTheme: "light"
  }
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.value.activeTheme = action.payload;
    }
  }
});