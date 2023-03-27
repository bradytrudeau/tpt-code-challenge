const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./types');
const { resolvers } = require('./resolvers');
const { dataSources } = require('./datasources')

const server = new ApolloServer({
  dataSources,
  typeDefs,
  resolvers,
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
