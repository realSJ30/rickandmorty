import ApolloClient, { DocumentNode } from "apollo-boost";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});

export const ExecGraphQL = async (
    query: DocumentNode,
    variables = {},
    policy?: 'cache-first' | 'network-only' | 'cache-only' | 'no-cache' | 'standby',
  ) => {
    try {
      const { data } = await client.query({
        query,
        variables,
        fetchPolicy: policy || 'no-cache',
      });
      return data;
    } catch (err: any) {
      return {
        error: true,
        graphQLErrors: err && err.graphQLErrors,
        message: err,
      };
    }
  };