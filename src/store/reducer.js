import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
  data: [],
  filteredData: [],
  loading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_ARE_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case "DATA_HAVE_ERROR":
      return {
        ...state,
        loading: false,
        error: action.haveError,
      };
    case "FITLER_DATA":
      return {
        ...state,
        filteredData: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
