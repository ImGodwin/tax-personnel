export const GET_CITIES = "GET_CITIES";
export const SET_ADMIN = "SET_ADMIN";
export const ADD_TOKEN = "ADD_TOKEN";
export const ADD_USER = "ADD_USER";

//action creator
export const saveUser = user => ({ type: ADD_USER, payload: user });
export const saveLoginToken = loginToken => ({ type: ADD_TOKEN, payload: loginToken });

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

//user login
export const userLogin = (loginPost, tokenStr) => {
  return async dispatch => {
    try {
      const response = await fetch("http://localhost:3002/public/auth/login", {
        method: "POST",
        body: JSON.stringify(loginPost),
        headers: {
          "content-type": "application/json",
        },
      });

      const loginTokenDetails = response.json();
      if (loginTokenDetails.ok) {
        dispatch(saveLoginToken(tokenStr));
      } else {
        throw new Error(loginPost.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};
