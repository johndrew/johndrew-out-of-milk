import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const isProd = process.env.NODE_ENV === 'production';
const client = new ApolloClient({
  uri: "graphql",
  // uri: isProd ? 'johndrew-out-of-milk.herokuapp.com/graphql' : "http://localhost:3000/graphql",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
