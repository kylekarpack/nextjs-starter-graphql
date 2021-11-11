import { ApolloServer } from "apollo-server-micro";
import { resolvers, typeDefs } from "utilities/graphql";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
