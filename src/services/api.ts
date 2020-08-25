import axios, { AxiosResponse, AxiosInstance } from 'axios';

export interface ICredentials {
  email: string;
  password: string;
}

interface IAuthenticate {
  token: string;
}

export interface INaver {
  name: string;
  birthdate: string | Date;
  admission_date: string | Date;
  job_role: string;
  user_id: string;
  project: string;
  url: string;
  id: string;
}

interface IRemove {
  message: string;
}

export const api: AxiosInstance = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1',
});

export const authenticate = async (
  credentials: ICredentials,
): Promise<AxiosResponse<IAuthenticate>> => {
  return api.post('/users/login', credentials);
};

export const index = async (): Promise<AxiosResponse<INaver[]>> => {
  return api.get('/navers');
};

export const show = async (id: string): Promise<AxiosResponse<INaver>> => {
  return api.get(`/navers/${id}`);
};

export const create = async (
  naver: Omit<INaver, 'id' | 'user_id'>,
): Promise<AxiosResponse<INaver>> => {
  return api.post('/navers', naver);
};

export const update = async (id: string): Promise<AxiosResponse<INaver>> => {
  return api.put(`/navers/${id}`);
};

export const remove = async (id: string): Promise<AxiosResponse<IRemove>> => {
  return api.delete(`/navers/${id}`);
};
