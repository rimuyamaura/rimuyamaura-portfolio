import { createSlice } from '@reduxjs/toolkit';

const themes = {
  winter: 'winter',
  black: 'black',
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.black;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      const { winter, black } = themes;
      state.theme = state.theme === black ? winter : black;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { toggleTheme } = userSlice.actions;
export default userSlice.reducer;
