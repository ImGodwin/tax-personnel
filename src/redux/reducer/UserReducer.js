import { ADD_NEW_USER, DELETE_PERSONNEL, LOG_IN, LOG_OUT } from "../action";

const initialState = {
  token: "",
  user: null,
  //editUser: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      //console.log(action.payload);
      return {
        ...state,
        token: action.payload,
      };
    }

    case LOG_OUT:
      return {
        user: null,
        token: "",
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
