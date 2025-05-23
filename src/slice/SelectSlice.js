
import { createSlice } from '@reduxjs/toolkit';

const initialState = null; 

const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    setSelectCountry: (state, action) => action.payload
  }
});

export const { setSelectCountry } = selectSlice.actions;
export default selectSlice.reducer;


export const getSelectCountry = (state) => state.slcCountry;
