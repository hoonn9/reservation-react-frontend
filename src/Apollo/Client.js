import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";
import { getUri } from "../Utils";

console.log(process.env.NODE_ENV, process.env.REACT_APP_DEV_URL);

const client = new ApolloClient({
  uri: getUri(),
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
