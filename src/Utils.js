import React from "react";

export const switchPlatform = (platform, a, b) =>
  platform === "desktop" ? a : b;

export const getSize = () => {
  const isClient = typeof window === "object";
  return {
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  };
};

export const dateConverter = (date) => {
  const convertDate = new Date(date);
  return `${convertDate.getFullYear()}년 ${
    convertDate.getMonth() + 1
  }월 ${convertDate.getDate()}일`;
};

export const dateDetailConverter = (date) => {
  const convertDate = new Date(date);
  return `${convertDate.getFullYear()}년 ${
    convertDate.getMonth() + 1
  }월 ${convertDate.getDate()}일 ${convertDate.getHours()}시 ${convertDate.getMinutes()}분`;
};

export const addDate = (date, num) => {
  const convertDate = new Date(date);
  convertDate.setDate(convertDate.getDate() + num);
  return convertDate;
};

export const setCookie = (name, value, expiredays) => {
  const today = new Date();

  today.setDate(today.getDate() + expiredays);

  document.cookie =
    name +
    "=" +
    escape(value) +
    "; path=/; expires=" +
    today.toGMTString() +
    ";";
};

export const getCookie = (name) => {
  const cName = name + "=";

  var x = 0;
  let i = 0;
  var endOfCookie;
  while (i <= document.cookie.length) {
    var y = x + cName.length;

    if (document.cookie.substring(x, y) === cName) {
      if ((endOfCookie = document.cookie.indexOf(";", y)) === -1)
        endOfCookie = document.cookie.length;

      return unescape(document.cookie.substring(y, endOfCookie));
    }

    x = document.cookie.indexOf(" ", x) + 1;

    if (x === 0) break;
    i++;
  }

  return "";
};

export const setWithExpiry = (key, value, ttl) => {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    window.location = "/";
    return null;
  }
  return item.value;
};

export const setBoardState = (type, currentPage, currentRange) => {
  const item = {
    currentPage,
    currentRange,
  };
  localStorage.setItem(type, JSON.stringify(item));
};

export const getBoardState = (type) => {
  const itemStr = localStorage.getItem(type);

  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  return item;
};

export const getUri = () =>
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/"
    : "https://hxxns-reservation-react.herokuapp.com/";

export const asyncRender = (query, props, Render, isLoading) => {
  return query.error ? null : query.loading ? null : <Render {...props} />;
};

export const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
