import React from 'react';
import { useQueryWithErrorHandling } from '../../helpers';
import { GET_MOVIE_DETAILS_BY_ID } from '../graphql';

function useGetMovieDetailsById() {
	const execQuery = useQueryWithErrorHandling();

	const movieDetails = React.useCallback(
		async (id) => {
			console.log({ id });
			const response = await execQuery({
				query: GET_MOVIE_DETAILS_BY_ID,
				variables: { id },
			});
			return response.data.movieDetailsById;
		},
		[execQuery]
	);

	return movieDetails;
}

export { useGetMovieDetailsById };
