import { all } from "redux-saga/effects";
import productsSaga from "../pages/product/redux/productSaga";

export default function* rootSaga() {
  yield all([productsSaga()]);
}
