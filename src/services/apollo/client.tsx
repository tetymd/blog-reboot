import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  InMemoryCacheConfig
} from "@apollo/client";

const cacheConfig: InMemoryCacheConfig = {
  typePolicies: {
    Query: {
      fields: {
        getPosts: {
          read(existing) {
            console.log("read existing:", existing);
            return existing;
          },
          merge(incoming: any | undefined[], existing = []) {
            console.log("existing:", existing);
            console.log("incoming:", incoming);
            return incoming ? [existing, incoming] : [existing];
          }
        }
      }
    }
  }
};

export const client = new ApolloClient({
  // link: link,
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(cacheConfig)
});
