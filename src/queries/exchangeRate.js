import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <div> loading ... </div>;
      else if (error) return <div>Error :( </div>;
      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            currency:{currency}
            ,rate:{rate}
          </p>
        </div>
      ));
    }}
  </Query>
);

export default ExchangeRates;
