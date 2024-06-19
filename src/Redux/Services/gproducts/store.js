import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './productsApi';
import filterReducer from '.filterSlice';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});


