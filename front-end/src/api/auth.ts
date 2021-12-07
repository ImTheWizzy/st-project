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
  const res = await axios.post("http://localhost:8081/registration", data);

  return res.data;
};

export const signIn = async (data: ISignInData) => {
  const res = await axios.post("http://localhost:8081/login", data);

  return res.data;
};
