import { PayloadAction } from '@reduxjs/toolkit';
import { Repo } from 'types/Repo';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { ProductPageSaga } from './saga';
import { ProductPageState, RepoErrorType } from './types';

export const initialState: ProductPageState = {
  data:[],
  username: 'react-boilerplate',
  repositories: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'productPage',
  initialState,
  reducers: {
    loadProducts(state) {
      state.loading = true;
      state.error = null;
      state.data = [];
    },
    productsLoaded(state, action: PayloadAction<any[]>) {
      const products = action.payload;
      state.data = products;
      state.loading = false;
    },
    productError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
    repoError(state, action: PayloadAction<RepoErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: productPageActions, reducer } = slice;

export const useProductPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: ProductPageSaga });
  return { actions: slice.actions };
};
