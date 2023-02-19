import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { productPageActions as actions } from '.';
import { Repo } from 'types/Repo';
import { RepoErrorType } from './types';

/**
 * Github repos request/response handler
 */
export function* getProducts() {
  console.log("saga")
  yield delay(500);
  // Select username from store
 
  const requestURL = `http://localhost:5000/product`;

  try {
    // Call our request helper (see 'utils/request')
    const products: any[] = yield call(request, requestURL);
    if (products?.length > 0) {
      yield put(actions.productsLoaded(products));
    } else {
      yield put(actions.productError(RepoErrorType.USER_HAS_NO_REPO));
    }
  } catch (err: any) {
    if (err.response?.status === 404) {
      yield put(actions.productError(RepoErrorType.USER_NOT_FOUND));
    } else if (err.message === 'Failed to fetch') {
      yield put(actions.productError(RepoErrorType.GITHUB_RATE_LIMIT));
    } else {
      yield put(actions.productError(RepoErrorType.RESPONSE_ERROR));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* ProductPageSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.loadProducts.type, getProducts);
}
