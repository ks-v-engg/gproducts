import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { gpstoreApi } from '../Redux/Services/gproducts';

export const store = configureStore({
  reducer: {
    [gpstoreApi.reducerPath]: gpstoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gpstoreApi.middleware),
});

setupListeners(store.dispatch);