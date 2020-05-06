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

export const dateSimpleConverter = (date) => {
  const now = new Date();
  const writeDay = new Date(date);
  let minus;
  let converted = "";

  if (now.getFullYear() > writeDay.getFullYear()) {
    // minus = now.getFullYear() - writeDay.getFullYear();
    // converted = minus + "년 전";
    converted = `${writeDay.getFullYear()}년 ${
      writeDay.getMonth() + 1
    }월 ${writeDay.getDate()}일 ${writeDay.getHours()}시 ${writeDay.getMinutes()}분`;
  } else if (now.getMonth() > writeDay.getMonth()) {
    // minus = now.getMonth() - writeDay.getMonth();
    // converted = minus + "달 전";
    converted = `${writeDay.getFullYear()}년 ${
      writeDay.getMonth() + 1
    }월 ${writeDay.getDate()}일 ${writeDay.getHours()}시 ${writeDay.getMinutes()}분`;
  } else if (now.getDate() > writeDay.getDate()) {
    // minus = now.getDate() - writeDay.getDate();
    // converted = minus + "일 전";
    converted = `${writeDay.getFullYear()}년 ${
      writeDay.getMonth() + 1
    }월 ${writeDay.getDate()}일 ${writeDay.getHours()}시 ${writeDay.getMinutes()}분`;
  } else if (now.getDate() == writeDay.getDate()) {
    const nowTime = now.getTime();
    const writeTime = writeDay.getTime();
    if (nowTime > writeTime) {
      let sec = parseInt(nowTime - writeTime) / 1000;
      let day = parseInt(sec / 60 / 60 / 24);
      sec = sec - day * 60 * 60 * 24;
      let hour = parseInt(sec / 60 / 60);
      sec = sec - hour * 60 * 60;
      let min = parseInt(sec / 60);
      sec = parseInt(sec - min * 60);
      if (hour > 0) {
        converted = hour + "시간 전";
      } else if (min > 0) {
        converted = min + "분 전";
      } else if (sec > 0) {
        converted = sec + "초 전";
      } else {
        converted = "방금 전";
      }
    } else {
      converted = "방금 전";
    }
  }
  return converted;
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

export const setStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getStorage = (key) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  return item;
};

export const getUri = () =>
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_URL
    : process.env.REACT_APP_PROD_URL;

export const asyncRender = (query, props, Render, isLoading) => {
  return query.error ? null : query.loading ? null : <Render {...props} />;
};

export const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
