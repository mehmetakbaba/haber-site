import { configureStore } from '@reduxjs/toolkit';
import wideScreenSlice from '../WideScreenSlider';
import { USAApiSlice } from '../slice/USASlice';
import  selectSlice  from '../slice/SelectSlice';
import { TRSlice } from '../slice/TRSlice';
import { FRSlice } from '../slice/FRSlice';
import { FINSlice } from '../slice/FINSlice';
export const store = configureStore({
  reducer: {
    [TRSlice.reducerPath]: TRSlice.reducer,
    [USAApiSlice.reducerPath]: USAApiSlice.reducer,
    [FRSlice.reducerPath]: FRSlice.reducer,
    [FINSlice.reducerPath]: FINSlice.reducer,

    WideSc: wideScreenSlice,
    slcCountry:selectSlice

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TRSlice.middleware, USAApiSlice.middleware,FRSlice.middleware,FINSlice.middleware),
});