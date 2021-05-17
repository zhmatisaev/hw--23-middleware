import { LOAD_START, LOAD_SUCCESS, LOAD_FAIL } from "../actions";

const initialState = {
  loading: false,
  isError: null,
  posts: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START:
      return { ...state, loading: true };

    case LOAD_SUCCESS:
      return { ...state, posts: action.payload, loading: false };

    case LOAD_FAIL:
      return { ...state, isError: action.payload };
    default:
      return state;
  }
};
