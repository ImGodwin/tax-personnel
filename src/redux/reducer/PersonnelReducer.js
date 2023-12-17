import { GET_PERSONNEL } from "../action";

const initialState = {
  personnelArr: [],
};

const personnelReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONNEL:
      return {
        ...state,
        personnelArr: action.payload,
      };
    default:
      return state;
  }
};

export default personnelReducer;
