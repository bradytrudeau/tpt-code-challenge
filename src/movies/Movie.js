import React from 'react';
import { useDialog } from '../helpers';
import { useGetMovieDetailsById } from './hooks/get-movie-details-by-id-hook';

function Movie({ movie }) {
	const { Dialog, hide, show } = useDialog();
	const [loading, setLoading] = React.useState(false);
	const [movieDetails, setMovieDetails] = React.useState(null);

	const searchDetailsById = useGetMovieDetailsById();

	const fetchMovieDetails = async () => {
		setLoading(true);
		const response = await searchDetailsById(movie.imdbID);
		console.log({ response });
		show();
		setLoading(false);
		setMovieDetails(response);
	};
	return (
		<>
			<Dialog onClickOverlay={hide} movie={movieDetails} />
			<div className="rounded overflow-hidden shadow-lg movie hover:scale-110" onClick={fetchMovieDetails}>
				<img className="poster" src={movie.Poster} alt="Poster" />
				<div className="text-md mx-3 mt-3 break-normal truncate flex justify-center">
					<strong>{movie.Title}</strong>
				</div>
				<div className="text-sm mx-3 mb-3 break-normal truncate flex justify-center">{movie.Year}</div>
			</div>
		</>
	);
}

export { Movie };
