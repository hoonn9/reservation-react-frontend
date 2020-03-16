export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("log")) || false,
  language: localStorage.getItem("language") || "kr"
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      const item = {
        value: token,
        expiry: new Date().getTime() + 1800000
      };
      localStorage.setItem("log", JSON.stringify(item));
      cache.writeData({
        data: {
          isLoggedIn: true
        }
      });
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("log");
      window.location = "/";
      return null;
    }
  }
};
