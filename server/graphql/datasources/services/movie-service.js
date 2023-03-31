const axios = require('axios').default;

class MovieService {
	constructor({ apiKey, baseUrl }) {
		this.apiKey = apiKey;
		this.baseUrl = baseUrl;
	}

	async byTitle({ title, page = 1 }) {
		const url = `${this.baseUrl}`;
		try {
			const response = await axios.get(url, {
				params: {
					s: title,
					type: 'movie',
					apiKey: this.apiKey,
					page,
				},
			});
			return { Movies: [...response.data.Search], TotalResults: response.data.totalResults, SearchTerm: title };
		} catch (error) {
			console.log(`Error fetching movies by title using search term "${title}:`, error);
		}
	}

	async detailsById({ id }) {
		const url = `${this.baseUrl}`;
		try {
			const response = await axios.get(url, {
				params: {
					i: id,
					apiKey: this.apiKey,
				},
			});
			return response.data;
		} catch (error) {
			console.log(`Error fetching movie details for movie with id "${id}:`, error);
		}
	}
}

module.exports = {
	MovieService,
};
