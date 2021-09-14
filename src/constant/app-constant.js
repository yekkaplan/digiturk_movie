/**
 * @param {String} API_KEY - The movie db api key
 * @param {String} LANGUAGE  - locale  language info
 * @param {String} DIGITURK_IMAGE  - digiturk logo
 * @param {String} IDLE_MOVIES - to check that no action has been taken for movies page
 * @param {String} IDLE_MOVIESDETAIL - to check that no action has been taken for movies-detail page
 * @param {String} BUSY - when the app is busy
 * @param {String} ERROR -  when throw error
 * @param {String} LOADING_MESSAGE - its loading message.
 */
const API_KEY = "7fe2e00520afd0761911e423d577c7db";
const LANGUAGE = "tr-TR";
const DIGITURK_IMAGE = "https://www.digiturk.com.tr/assets/img/logo-red.png";
const BACKDROP_URL = "https://image.tmdb.org/t/p/w500_and_h282_face/";
const IDLE_MOVIES = "IDLE_MOVIES";
const IDLE_MOVIESDETAIL = "IDLE_MOVIESDETAIL";
const BUSY = "BUSY";
const ERROR = "ERROR";
const LOADING_MESSAGE = "Yükleniyor..";
export {
  API_KEY,
  LANGUAGE,
  DIGITURK_IMAGE,
  IDLE_MOVIES,
  IDLE_MOVIESDETAIL,
  LOADING_MESSAGE,
  BUSY,
  ERROR,
  BACKDROP_URL,
};
