import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';

const httpLink = new HttpLink({ uri: 'https://metaphysics-staging.artsy.net/' });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      // 'x-access-token': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MDU3NTkyNmU4YTJlOTAwMTI3YzBlZmYiLCJzYWx0X2hhc2giOiIyN2U3N2IwYjA3M2EzYTAzN2VjY2Y3OGUwNDE5MmRiYyIsInJvbGVzIjoidXNlciIsInBhcnRuZXJfaWRzIjpbXSwib3RwIjpmYWxzZSwiZXhwIjoxNjIxNTIxMjE0LCJpYXQiOjE2MTYzMzcyMTQsImF1ZCI6IjVkNDA5OTZlNmU2MDQ5MDAwNzQ5MGZhMiIsImlzcyI6IkdyYXZpdHkiLCJqdGkiOiI2MDU3NTkzZTc4NTk3YzAwMGUyYTEwNDkifQ.jwS_hYhgZ52V0u8JPNpmjtbnPjh38RlD7IN11UaCVbc',
      // 'x-user-id': '60575926e8a2e900127c0eff'
    }
  });

  return forward(operation);
})

const artsyClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default artsyClient
