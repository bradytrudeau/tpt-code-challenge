const { merge } = require('lodash');

const { resolvers: movies } = require('./movies');

const resolvers = merge(
movies
);

module.exports = {
	resolvers,
};
