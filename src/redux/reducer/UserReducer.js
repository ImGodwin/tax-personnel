import { ADD_NEW_USER, ADD_TOKEN } from "../action";

const initialState = {
  token: "",
  user: null,
  editUser: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case ADD_NEW_USER:
      return {
        ...state,
        user: action.payload,
      };

    /*  case EDIT_USER:
      return {
        ...state,
        editAUser: [...state.editUser, action.payload],
      }; */

    default:
      return state;
  }
};

export default userReducer;
