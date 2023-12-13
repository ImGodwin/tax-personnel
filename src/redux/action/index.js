export const GET_CITIES = "GET_CITIES";
export const SET_ADMIN = "SET_ADMIN";
export const ADD_USER = "ADD_USER";

export const saveUser = user => ({ type: ADD_USER, payload: user });
//fetch auth

export const registerUser = userDetails => {
  return async dispatch => {
    try {
      const response = await fetch("http://localhost:3002/public/auth/register", {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "content-type": "application/json",
        },
      });

      const registerationDetails = response.json();
      if (registerationDetails.ok) {
        dispatch(saveUser(registerationDetails));
      } else {
        throw new Error(registerationDetails.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};
