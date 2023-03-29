const { gql } = require('apollo-server');

const typeDefs = gql`
	type Movie {
		"ID as displayed with IMDB"
		imdbID: String
		"Title of movie"
		Title: String
		"Year movie was released"
		Year: String
		"Content rating of movie"
		Rated: String
		"Full movie release date"
		Released: String
		"Length of movie in minutes"
		Runtime: String
		"Genre of movie"
		Genre: String
		"Director(s) of movie"
		Director: String
		"Writer(s) of movie"
		Writer: String
		"Actor(s) featured in movie"
		Actors: String
		"Plot of the movie"
		Plot: String
		"Language that the movie is available in"
		Language: String
		"Country of origin of the movie"
		Country: String
		"Awards won by the movie"
		Awards: String
		"URL of movie poster image"
		Poster: String
	}

	type PaginatedMovies {
		"List of movies"
		Movies: [Movie]
		"Total number of results from search"
		TotalResults: Int
		"Search term"
		SearchTerm: String
	}

	type Query {
		"Fetch movie by title"
		movieByTitle("Title of movie" title: String!, "Page of the response" page: Int): PaginatedMovies
		"Fetch movie details by movie id"
		movieDetailsById("Id of movie" id: ID!): Movie
	}
`;

module.exports = { typeDefs };
