/**
 * @param {String} API_KEY - The movie db api key
 * @param {String} LANGUAGE  - locale  language info
 * @param {String} DIGITURK_IMAGE  - digiturk logo
 * @param {String} GET_MOVIES - get movie list action type
 * @param {String} GET_MOVIES_FAILED - get movie list error action type
 * @param {String} GET_MOVIES_DETAIL - get movie detail action type
 * @param {String} GET_MOVIES_DETAIL_FAILED - get movie detail action type
 * @param {String} BUSY - when the app is busy
 * @param {String} ERROR -  when throw error
 * @param {String} LOADING_MESSAGE - its loading message.
 */
const API_KEY = "7fe2e00520afd0761911e423d577c7db";
const LANGUAGE = "tr-TR";
const DIGITURK_IMAGE = "https://www.digiturk.com.tr/assets/img/logo-red.png";
const BACKDROP_URL = "https://image.tmdb.org/t/p/w500_and_h282_face/";
const GET_MOVIES = "GET_MOVIES";
const GET_MOVIES_DETAIL = "GET_MOVIES_DETAIL";
const GET_MOVIES_FAILED = "GET_MOVIES_FAILED";
const GET_MOVIES_DETAIL_FAILED = "GET_MOVIES_DETAIL_FAILED";
const BUSY = "BUSY";
const ERROR = "ERROR";
const LOADING_MESSAGE = "Yükleniyor..";
export {
  API_KEY,
  LANGUAGE,
  DIGITURK_IMAGE,
  GET_MOVIES_DETAIL,
  GET_MOVIES_FAILED,
  GET_MOVIES_DETAIL_FAILED,
  GET_MOVIES,
  LOADING_MESSAGE,
  BUSY,
  ERROR,
  BACKDROP_URL,
};
