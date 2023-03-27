const resolvers = {
	Query: {
		async movieByTitle(_source, _args, { dataSources }) {
			console.log("Movie by title");
			const { movieService } = dataSources;
			return movieService.byTitle(_args);
		},
	},
};

module.exports = {
	resolvers,
};
