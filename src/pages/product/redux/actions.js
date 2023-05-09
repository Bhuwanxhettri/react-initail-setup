const entities = "[Product]";

const action = {
  FETCH_PRODUCTS_REQ: `${entities} FETCH_PRODUCTS_REQ`,

  fetchProductsReq: () => ({
    type: action.FETCH_PRODUCTS_REQ,
  }),
  //   addProductReq: (payload) => ({
  //     type: action.CREATE_PROJECTS_REQ,
  //     payload,
  //   }),
};

export default action;
