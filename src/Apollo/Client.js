import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/"
      : "https://hxxns-reservation-react.herokuapp.com/",
  clientState: {
    defaults,
    resolvers,
  },
  headers: {
    Authorization: `Bearer ${
      localStorage.getItem("log")
        ? JSON.parse(localStorage.getItem("log")).value
        : ""
    }`,
  },
});

export default client;
