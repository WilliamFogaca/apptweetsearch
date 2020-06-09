import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import Routes from './src/routes';

import ApolloClient from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri: 'https://www.graphqlhub.com/playground',
});

const client = new ApolloClient({
  uri: httpLink,
  cache
})


export default function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}
