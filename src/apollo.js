import { ApolloClient, InMemoryCache } from '@apollo/client';

// set up apollo
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutaition: {
      toggleLike: (__, {id}, {cache}) => {
        cache.modify({
          id: `Movie: ${id}`,
          fields: {
            isLiked: (isLiked) => !isLiked
          }
        })
      }
    }
  },
    
  });

export default client;