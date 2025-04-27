import { configureStore } from '@reduxjs/toolkit';
import wideScreenSlice from '../WideScreenSlider';
import { ApiSlice } from '../ApiSlice';
export const store = configureStore({
    reducer: {
      [ApiSlice.reducerPath]: ApiSlice.reducer,
      WideSc: wideScreenSlice,
      
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ApiSlice.middleware),
   // devTools: process.env.NODE_ENV !== 'production',
   
  });