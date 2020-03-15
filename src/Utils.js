import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const getSize = () => {
  const isClient = typeof window === "object";
  return {
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined
  };
};

export const dateConverter = date => {
  const convertDate = new Date(date);
  return `${convertDate.getFullYear()}. ${convertDate.getMonth()}. ${convertDate.getDate()}`;
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

export const getCookie = name => {
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
