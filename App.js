import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import Routes from './src/routes';

import apolloClient from './src/services/apollo';

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Routes />
    </ApolloProvider>
  );
}
