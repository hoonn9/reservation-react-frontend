export const switchPlatform = (platform, a, b) =>
  platform === "desktop" ? a : b;

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

export const setWithExpiry = (key, value, ttl) => {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttl
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpiry = key => {
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
    currentRange
  };
  localStorage.setItem(type, JSON.stringify(item));
};

export const getBoardState = type => {
  const itemStr = localStorage.getItem(type);

  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  return item;
};
