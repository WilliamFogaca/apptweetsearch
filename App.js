import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import Routes from './src/routes';

import apolloClient from './src/services/apollo';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Routes />
  </ApolloProvider>
);

export default App;
