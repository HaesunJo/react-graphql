import { ApolloClient, InMemoryCache } from '@apollo/client';

// set up apollo
const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
  });

export default client;