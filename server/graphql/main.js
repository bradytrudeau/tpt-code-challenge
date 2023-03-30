// const express = require('express');
// const { ApolloServer } = require('apollo-server');
// const { typeDefs } = require('./types');
// const { resolvers } = require('./resolvers');
// const { dataSources } = require('./datasources');
// const app = express();

// const server = new ApolloServer({
// 	dataSources,
// 	typeDefs,
// 	resolvers,
// });

// server.applyMiddleware({ app });

// app.listen({ port: process.env.PORT }).then(({ url }) => {
// 	console.log(`🚀 Server ready at ${url}`);
// });

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./types');
const { resolvers } = require('./resolvers');
const { dataSources } = require('./datasources');
const path = require('path');

const app = express();

const server = new ApolloServer({
	dataSources,
	typeDefs,
	resolvers,
});

async function startServer() {
	await server.start();
	server.applyMiddleware({ app });
}

startServer();

const PORT = process.env.PORT || 4000; // Use the Heroku-assigned port or default to 4000

app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
