const axios = require('axios').default;

class MovieService {
	constructor({ apiKey, baseUrl }) {
		this.apiKey = apiKey;
		this.baseUrl = baseUrl;
	}

  async byTitle({title}) {
    console.log({title});
		let results = 'Stuff';
		const url = `${this.baseUrl}`;
		try {
			const response = await axios.get(url, {
				params: {
					t: title,
          apiKey: this.apiKey
				},
			});
      // console.log({response});
			return response.data;
		} catch (error) {
			console.log('Error:', error);
		}

		return results;
	}

}

module.exports = {
	MovieService,
};
