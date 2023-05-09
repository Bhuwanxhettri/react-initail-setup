import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "product",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setProductsList(state, action) {
      state.list = action.payload;
    },
  },
});

export const { setLoading, setError, setProductsList } = productsSlice.actions;

export default productsSlice.reducer;
