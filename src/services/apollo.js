  
import ApolloClient from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';

const httpLink = createHttpLink({
  uri: 'https://www.graphqlhub.com/playground',
});

const client = new ApolloClient({
  uri: httpLink
});

export default client;