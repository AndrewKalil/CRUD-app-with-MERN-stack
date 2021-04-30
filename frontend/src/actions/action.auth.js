import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILED,
  LOGOUT_USER,
} from "./action.types";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  const config = {
    header: { "Content-Type": "application/json" },
  };

  const body = { email, password };

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      body,
      config
    );
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    console.log("user logged in");
  } catch (err) {
    dispatch({ type: LOGIN_FAILED });
  }
};

export const signup = (name, email, password) => async (dispatch) => {
  const config = {
    header: { "Content-Type": "application/json" },
  };

  const body = { name, email, password };

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/signup`,
      body,
      config
    );
    dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    console.log("user created!");
  } catch (err) {
    dispatch({ type: SIGNUP_FAILED });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};

export const check_authenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const tokenCheck = { token: localStorage.getItem("access") };

    try {
      if (tokenCheck.token !== null) {
        dispatch({
          type: AUTHENTICATION_SUCCESS,
          payload: tokenCheck,
        });
      }
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_FAILED,
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATION_FAILED,
    });
  }
};
