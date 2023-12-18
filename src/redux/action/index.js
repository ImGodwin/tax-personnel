export const GET_CITIES = "GET_CITIES";
export const SET_ADMIN = "SET_ADMIN";
export const ADD_TOKEN = "ADD_TOKEN";
export const ADD_NEW_USER = "ADD_NEW_USER";
export const EVERY_CITY = "EVERY_CITY";
export const EDIT_USER = "EDIT_USER";
export const GET_ME = "GET_ME";
export const GET_PERSONNEL = "GET_PERSONNEL";

//action creator
export const saveUser = user => ({ type: ADD_NEW_USER, payload: user });
export const saveLoginToken = loginToken => ({ type: ADD_TOKEN, payload: loginToken });
export const allFetchedCities = cityDetails => ({ type: EVERY_CITY, payload: cityDetails });
export const editAUser = user => ({ type: EDIT_USER, payload: user });
export const getAllCollaborators = client => ({ type: GET_PERSONNEL, payload: client });
export const getMyDetails = me => ({ type: GET_ME, payload: me });
//auth
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
        localStorage.setItem("token", loginTokenDetails);
        dispatch(saveLoginToken(tokenStr));

        //get my profile after login
        //using the item in local storage

        const tokenSavedInLocalStorage = localStorage.getItem("token");

        try {
          const resp2 = await fetch("http://localhost:3002/taxpersonnel/my-profile", {
            headers: {
              Authorization: `Bearer ${tokenSavedInLocalStorage}`,
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
      } else {
        throw new Error(loginPost.message);
      }
    } catch (error) {
      console.log(error.message);
    }
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

//edit profile

export const editProfile = details => {
  return async dispatch => {
    try {
      const resp = await fetch("http://localhost:3002/taxpersonnel//update/profile", {
        method: "PUT",
        body: JSON.stringify(details),
        headers: {
          "content-type": "application/json",
        },
      });

      const editDetails = resp.json();
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

export const getAllPersonnel = () => {
  return async dispatch => {
    console.log("logging");
    try {
      let resp = await fetch("http://localhost:3002/taxpersonnel", {
        headers: {
          //Authorization: `Bearer ${authKey}`,
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
