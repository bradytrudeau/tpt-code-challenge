const resolvers = {
	Query: {
		async movieByTitle(_source, _args, { dataSources }) {
			console.log('Movie by title');
			const { movieService } = dataSources;
			return movieService.byTitle(_args);
		},
		async movieDetailsById(_source, _args, { dataSources }) {
			console.log('Movie by title');
			const { movieService } = dataSources;
			return movieService.detailsById(_args);
		},
	},
};

module.exports = {
	resolvers,
};
