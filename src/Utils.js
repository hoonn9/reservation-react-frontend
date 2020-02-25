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
