import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createSlice } from "@reduxjs/toolkit";

export enum ThemeType {
  light = "light",
  dark = "dark",
}

export type Theme = {
  theme: ThemeType;
}

const initialState: Theme = {
  theme: useLocalStorage.getItem("theme") ? useLocalStorage.getItem("theme") : ThemeType.light,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if(state.theme === ThemeType.light){
        state.theme = ThemeType.dark;
        useLocalStorage.setItem("theme", ThemeType.dark);
      } else {
        state.theme = ThemeType.light;
        useLocalStorage.setItem("theme", ThemeType.light);
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
