import { AUTH_USER } from "./types";
import axios from "axios";

export const signup = (formProps) => async (dispatch) => {
  const res = await axios.post("http://localhost:3090/signup", formProps);

  dispatch({ type: AUTH_USER, payload: res.data.token });
};
