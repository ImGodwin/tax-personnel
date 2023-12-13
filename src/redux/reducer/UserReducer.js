import { ADD_TOKEN, ADD_USER } from "../action";

const initialState = {
  token: "",
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
