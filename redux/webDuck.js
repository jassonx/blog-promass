import Cookies from "js-cookie";
import WebApiUser from "../api/users";
// import WebApiAuth from "../api/auth";

const initialData = {
  loading: false,
  user: null,
  company: null,
  login: false,
};

const LOADING_GLOBAL = "LOADING_GLOBAL";
const USER = "USER";
const COMPANY = "COMPANY";
const LOGIN = "LOGIN";
const webReducer = (state = initialData, action) => {
  switch (action.type) {
    case LOADING_GLOBAL:
      return { ...state, loading: action.payload };
    case USER:
      return { ...state, user: action.payload };
    case LOGIN:
      return { ...state, login: action.payload };
    case COMPANY:
      return { ...state, company: action.payload };
    default:
      return state;
  }
};
export default webReducer;

export const LoadingGlobal = (data) => async (dispatch) => {
  dispatch({ type: LOADING_GLOBAL, payload: data });
};

export const validatedLogin = () => async (dispatch) => {
  try {
    let session = Cookies.get("user");
    if (session) {
      session = JSON.parse(session);
      dispatch({ type: LOGIN, payload: true });
      dispatch({ type: USER, payload: session });
      return session;
    } else {
      Cookies.remove("session");
      dispatch({ type: LOGIN, payload: false });
      dispatch({ type: USER, payload: null });
    }
  } catch (error) {
    return false;
  }
};

export const Login = (data) => async (dispatch) => {
  try {
    const login = await WebApiUser.login(data);
    console.log("🚀 ~ Login ~ login.data:", login.data);
    if (!login.data) return false;
    dispatch({ type: LOGIN, payload: true });
    dispatch({ type: USER, payload: login.data });
    Cookies.set("user", JSON.stringify(login.data));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const LogOut = () => async (dispatch) => {
  try {
    dispatch({ type: LOGIN, payload: false });
    dispatch({ type: USER, payload: null });
    Cookies.remove("user");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
