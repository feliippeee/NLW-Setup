import axios from "axios";

export const api = axios.create({
  //baseURL: 'http://192.168.15.30:3333'
  baseURL: 'http://192.168.0.20:3333'
})