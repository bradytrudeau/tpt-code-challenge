import React from 'react';
import { useQueryWithErrorHandling } from '../../helpers';
import { GET_MOVIE_BY_TITLE } from '../graphql';

function useGetMovieByTitle() {
	const execQuery = useQueryWithErrorHandling();

	const movie = React.useCallback(
		async (title, page) => {
			console.log({ title });
			const response = await execQuery({
				query: GET_MOVIE_BY_TITLE,
				variables: { title, page },
			});
			return response.data.movieByTitle;
		},
		[execQuery]
	);

	return movie;
}

export { useGetMovieByTitle };
