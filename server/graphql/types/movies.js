const { gql } = require('apollo-server');

const typeDefs = gql`
	type Movie {
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

	type Query {
		"Fetch movie by title"
		movieByTitle("Title of movie" title: String!): Movie
	}
`;

module.exports = { typeDefs };
