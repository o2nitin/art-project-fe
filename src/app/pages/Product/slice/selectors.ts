import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.productPage|| initialState;

export const selectProductData = createSelector(
  [selectDomain],
  ProductPageDataFromState => ProductPageDataFromState.data,
);

export const selectProductDataLoading = createSelector(
  [selectDomain],
  ProductPageDataFromState => ProductPageDataFromState.loading,
);

export const selectProductDataError = createSelector(
  [selectDomain],
  ProductPageDataFromState => ProductPageDataFromState.error,
);




