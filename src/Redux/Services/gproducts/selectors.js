import { createSelector } from '@reduxjs/toolkit';
import { productsApi } from './productsApi';

const selectProducts = (state) => state.productsApi.queries['getProducts(undefined)']?.data || [];

const selectSelectedCategories = (state) => state.filter.selectedCategories;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSelectedCategories],
  (products, selectedCategories) => {
    if (selectedCategories.length === 0) return products;
    return products.filter(product => selectedCategories.includes(product.category));
  }
);
