import axios from "axios";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = process.env.REACT_APP_NODEJS_URL;

axiosClient.defaults.timeout = 2000;

//axiosClient.defaults.withCredentials = true;
const headers = {
  "Access-Control-Allow-Origin": "*",
};
export function getRequest(URL: string) {
  return axiosClient
    .get(`/${URL}`, {
      headers: headers,
    })
    .then((response) => response);
}

export function postRequest(URL: string, payload: any) {
  return axiosClient
    .post(`/${URL}`, payload, {
      headers: headers,
    })
    .then((response) => response);
}

export function putRequest(URL: string, payload: any) {
  return axiosClient
    .put(`/${URL}`, payload, {
      headers: headers,
    })
    .then((response) => response);
}

export function patchRequest(URL: string, payload: any) {
  return axiosClient
    .patch(`/${URL}`, payload, {
      headers: headers,
    })
    .then((response) => response);
}

export function deleteRequest(URL: string) {
  return axiosClient
    .delete(`/${URL}`, {
      headers: headers,
    })
    .then((response) => response);
}
