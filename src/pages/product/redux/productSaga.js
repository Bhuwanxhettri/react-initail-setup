import { call, put, takeLatest } from "redux-saga/effects";
import { setLoading, setError, setProductsList } from "../redux/productSlice";
import action from "./actions";
import { fetchProduct } from "../../../api/product";

function* fetchProductsList() {
  try {
    yield put(setLoading(true));
    const data = yield call(fetchProduct);
    yield put(setProductsList(data));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setLoading(false));
  }
}

function* productsSaga() {
  yield takeLatest(action.FETCH_PRODUCTS_REQ, fetchProductsList);
}

export default productsSaga;
