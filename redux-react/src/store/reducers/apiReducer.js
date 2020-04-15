const initialState = {
  products: [],
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;
