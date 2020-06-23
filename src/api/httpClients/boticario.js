'use strict';

const axios = require("axios");

const boticarioV1 = axios.create({
  baseURL: process.env.BOTICARIO_URI,
  timeout: 6000,
  headers: {
    "token": process.env.BOTICARIO_TOKEN,
  }
});

boticarioV1.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

boticarioV1.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

module.exports = {
  boticarioV1,
}
