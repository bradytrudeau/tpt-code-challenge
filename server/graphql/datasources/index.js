const {
	MovieService
} = require('./services');

function dataSources() {
  const config = {apiKey: process.env.API_KEY, baseUrl: process.env.BASE_URL}

	return {
		movieService: new MovieService(config),
	};
}

module.exports = {
	dataSources,
};
