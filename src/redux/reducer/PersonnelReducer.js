import { DELETE_PERSONNEL, GET_PERSONNEL } from "../action";

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

    /*  case DELETE_PERSONNEL:
      return {
        ...state,
        personnelArr: state.personnelArr.filter((_, i) => i !== action.payload),
      }; */
    default:
      return state;
  }
};

export default personnelReducer;
