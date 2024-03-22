import axios from "axios";

const HOSTLINK = "https://emirhan-namaz-front.kgzkbi.easypanel.host/istanbul";
const LOCALHOST = "http://localhost:8080";
export const APIURL = HOSTLINK;

export const http = axios.create({
  baseURL: APIURL,
  data: {
    token: localStorage.getItem("userToken"),
  },
});

export const httpError = (error) => {
  let errorMessage = error.message;

  if (error.response) {
    errorMessage = error.response.data;
  }
  return errorMessage;
};
