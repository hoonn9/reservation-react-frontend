import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";
import { getUri } from "../Utils";

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
