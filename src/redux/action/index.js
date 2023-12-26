export const GET_CITIES = "GET_CITIES";
export const SET_ADMIN = "SET_ADMIN";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const ADD_NEW_USER = "ADD_NEW_USER";
export const EVERY_CITY = "EVERY_CITY";
export const EDIT_USER = "EDIT_USER";
export const GET_ME = "GET_ME";
export const GET_PERSONNEL = "GET_PERSONNEL";
export const DELETE_PERSONNEL = "DELETE_PERSONNEL";

//action creator
export const saveUser = user => ({ type: ADD_NEW_USER, payload: user });
export const saveLoginToken = loginToken => ({ type: LOG_IN, payload: loginToken });
export const allFetchedCities = cityDetails => ({ type: EVERY_CITY, payload: cityDetails });
export const editAUser = user => ({ type: EDIT_USER, payload: user });
export const getAllCollaborators = client => ({ type: GET_PERSONNEL, payload: client });
export const getMyDetails = me => ({ type: GET_ME, payload: me });
export const logout = () => ({ type: LOG_OUT, payload: null });
export const removePersonnel = i => ({ type: DELETE_PERSONNEL, payload: i });
//auth

//register collaborator
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
      if (response.ok) {
        dispatch(saveUser(registerationDetails));
      } else {
        throw new Error(registerationDetails.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

//const tokenSavedInLocalStorage = localStorage.getItem("token");
//user login
export const userLogin = login => {
  return async dispatch => {
    //localStorage.clear();
    try {
      const response = await fetch("http://localhost:3002/public/auth/login", {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
          "content-type": "application/json",
        },
      });

      const loginTokenDetails = await response.json();
      console.log(loginTokenDetails);
      if (response.ok) {
        //localStorage.setItem("token", JSON.stringify(loginTokenDetails));
        dispatch(saveLoginToken(loginTokenDetails.accessTokenString));
        dispatch(myProfile(loginTokenDetails.accessTokenString));
        //get my profile after login
        //using the item in local storage
        //console.log("confirming");
      } else {
        throw new Error(login.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

//my personal profile

export const myProfile = token => {
  return async dispatch => {
    //console.log("checked");
    try {
      const resp2 = await fetch("http://localhost:3002/taxpersonnel/my-profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (resp2) {
        const me = await resp2.json();
        console.log(me);
        dispatch(getMyDetails(me));
      } else {
        console.log("error fetching me");
      }
    } catch (error) {}
  };
};

//fetch all cities

export const getAllCities = () => {
  return async dispatch => {
    try {
      let resp = await fetch("http://localhost:3002/public/city");
      if (resp.ok) {
        let fetchedCities = await resp.json();
        dispatch(allFetchedCities(fetchedCities.content));
        //console.log(fetchedCities.content);
      } else {
        throw new Error("Fetch Error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

//fetch profile using udemy profile edit style
//fetching profile for edit

export const editProfile = (details, token) => {
  return async dispatch => {
    try {
      const resp = await fetch("http://localhost:3002/taxpersonnel/update/profile", {
        method: "PUT",
        body: JSON.stringify(details),
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      });

      const editDetails = await resp.json();
      if (editDetails.ok) {
        dispatch(editAUser(editDetails));
        console.log(editDetails);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

//select each registered personnel

export const getAllPersonnel = token => {
  return async dispatch => {
    console.log("logging");
    try {
      let resp = await fetch("http://localhost:3002/taxpersonnel", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (resp.ok) {
        let fetchedPersonnel = await resp.json();
        dispatch(getAllCollaborators(fetchedPersonnel.content));
        console.log(fetchedPersonnel);
      } else {
        throw new Error("Fetch Error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

//delete user
export const deletePersonnel = async ({ onSuccess, id, token }) => {
  try {
    const response = await fetch(`http://localhost:3002/taxpersonnel/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    });
    if (response.ok) {
      onSuccess();
    }
  } catch (error) {}
};
