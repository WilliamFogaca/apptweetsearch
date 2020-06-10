  
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://apptweetsearch.herokuapp.com/graphql',
  cache
});

export default client;