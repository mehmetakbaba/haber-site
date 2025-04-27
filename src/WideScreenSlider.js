import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
  title:null,
  description:null
};

const wideScreenSlice = createSlice({
  name: 'wideScreen',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setAll: (state, action) => {
      state.value = !state.value;
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
  },
});

export const { toggle, setTrue, setFalse,setTitle,setDescription,setAll } = wideScreenSlice.actions;
export default wideScreenSlice.reducer;
