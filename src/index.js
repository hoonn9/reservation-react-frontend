import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./Components/App";
import Client from "./Apollo/Client";

const Index = () => (
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>
);

render(<Index />, document.getElementById("root"));
