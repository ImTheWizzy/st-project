import axios from "axios";

export interface ISignUpData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export interface ISignInData {
  username: string;
  password: string;
}

export const signUp = async (data: ISignUpData) => {
  const response = await axios.post(`${process.env.REACT_APP_REMOTE_URL}/registration`, data);

  return response.data;
};

export const signIn = async (data: ISignInData) => {
  const response = await axios.get(`${process.env.REACT_APP_REMOTE_URL}/login`, {
    params: data,
  });

  return response.data;
};
