import { gql } from '@apollo/client';

const GET_MOVIE_BY_TITLE = gql`
	query MovieByTitle($title: String!, $page: Int) {
		movieByTitle(title: $title, page: $page) {
			Movies {
				Title
				Plot
				Poster
				Year
				imdbID
			}
			TotalResults
			SearchTerm
		}
	}
`;

export { GET_MOVIE_BY_TITLE };
