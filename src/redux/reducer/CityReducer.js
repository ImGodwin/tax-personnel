import { EVERY_CITY } from "../action";

const initialState = {
  content: [],
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVERY_CITY:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default cityReducer;
