const { gql } = require('apollo-server');
const { typeDefs: Movies } = require('./movies');

const Query = gql`
	scalar JSON
	scalar JSONObject
	scalar DateTime
`;

module.exports = {
	typeDefs: [
		Query,
		Movies,
	],
};
