import { gql } from '@apollo/client';

const GET_MOVIE_DETAILS_BY_ID = gql`
	query MovieDetailsById($id: ID!) {
		movieDetailsById(id: $id) {
			Title
			Plot
			Poster
			Year
			imdbID
			Rated
			Runtime
			Genre
			Writer
			Actors
			Director
			Awards
		}
	}
`;

export { GET_MOVIE_DETAILS_BY_ID };
