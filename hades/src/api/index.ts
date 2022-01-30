import axios from 'axios';
const baseUrl = 'http://10.0.2.2:8080';

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

export interface IPatientData {
  firstName: string;
  lastName: string;
  egn: string;
  phone: string;
  address: string;
  birthDate: string;
  age: string;
  genderType: string;
  additionalInfo: string;
  doctorUser: string;
}

export const signIn = async (data: ISignInData) => {
  const response = await axios.get(`${baseUrl}/login`, {
    params: data,
  });

  return response.data;
};

export const signUp = async (data: ISignUpData) => {
  const response = await axios.post(`${baseUrl}/registration`, {
    params: data,
  });

  return response.data;
};

export const addPatient = async (data: IPatientData) => {
  const response = await axios.post(`${baseUrl}/patient/save`, null, {
    params: data,
  });

  return response.data;
};
