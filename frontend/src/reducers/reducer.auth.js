import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILED,
  LOGOUT_USER,
} from "../actions/action.types";

const initialState = {
  access: localStorage.getItem("access"),
  isAuthenticated: null,
  user: null,
  message: "",
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("access", payload.token);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.token,
        user: payload.msg,
      };
    case LOGIN_FAILED:
      alert("Incorrect email or password");
      return {
        ...state,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case SIGNUP_FAILED:
      alert("User exists or connection error");
      localStorage.removeItem("access");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case SIGNUP_SUCCESS:
      alert("User created successfully!");
      return {
        ...state,
        isAuthenticated: false,
      };
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        access: payload.token,
      };
    case AUTHENTICATION_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        access: null,
      };
    default:
      return state;
  }
}
