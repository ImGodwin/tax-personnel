import { GET_CITIES } from "../action";

const initialState = {
  personnel: [],
};

const personnelReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        personnel: action.payload,
      };
    default:
      return state;
  }
};

export default personnelReducer;
