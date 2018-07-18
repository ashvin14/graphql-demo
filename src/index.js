import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

import "./styles.css";
import ExchangeRates from "./queries/exchangeRate";

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

client.query({
  query: gql`
    {
      rates(currency: "USD") {
        currency
      }
    }
  `
});

function App() {
  return (
    <div className="App">
      <h1>Hello to graphQl demo</h1>
      <ExchangeRates />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
