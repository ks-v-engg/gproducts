import { createSelector } from '@reduxjs/toolkit';
import { useGetProductByNameQuery } from '.';
import filterSlice from './filterSlice';

const selectProducts = (state) => state.gpstoreApi.queries['getProductByName(undefined)']?.data || [];

const selectSelectedCategories = (state) => state.filter.selectedCategories;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSelectedCategories],
  (products, selectedCategories) => {
    if (selectedCategories.length === 0) return products;
    return products.filter(product => selectedCategories.includes(product.product_type));
  }
);