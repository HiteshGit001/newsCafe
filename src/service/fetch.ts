import { BASE_URL } from "../api/api";
import { API_KEY } from "../api/apiKey";
import { axiosGet } from "./request";

export const fetchTopHedlines = (country: string) => {
  const response = axiosGet(`${BASE_URL}top-headlines?country=${country}&apiKey=${API_KEY}`);
  console.log(`${BASE_URL}top-headlines?country=${country}&apiKey=${API_KEY}`);
  return response;
}

export const fetchSearch = (query: string, date: any) => {
  const response = axiosGet(`${BASE_URL}everything?q=${query}&from=${date}&sortBy=publishedAt&apiKey=${API_KEY}`);
  console.log(`${BASE_URL}everything?q=${query}&from=${date}&sortBy=publishedAt&apiKey=${API_KEY}`)
  return response;
}

export const fetchFilter = (country: string, catagory: string) => {
  const response = axiosGet(`${BASE_URL}top-headlines?.country=${country}&category=${catagory}&apiKey=${API_KEY}`);
  console.log(`${BASE_URL}top-headlines?.country=${country}&category=${catagory}&apiKey=${API_KEY}`)
  console.log(response);
  return response;
}