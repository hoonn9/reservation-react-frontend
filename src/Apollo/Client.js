import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

const client = new ApolloClient({
  uri: process.env.NODE_ENV === "development" ? "http://localhost:4000" : "",
  clientState: {
    defaults,
    resolvers
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

export default client;
