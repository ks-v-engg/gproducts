import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../features/products/productsApi';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});