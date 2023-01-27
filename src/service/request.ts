import axios, { AxiosResponse } from "axios";

export const axiosGet = (url: string): Promise<AxiosResponse<any, any>> => {
  return axios.get(url);
}