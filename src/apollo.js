import { ApolloClient, InMemoryCache } from '@apollo/client';

// set up apollo
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
  });

// check if the server run well
// client.query({
//   query: gql`
//   {
//     allMovies{
//       title
//     }
//   }`
// }).then((data) => console.log(data));

export default client;