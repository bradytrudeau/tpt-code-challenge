import React from 'react';
import { Spinner, Tooltip, useDialog } from '../helpers';
import { useGetMovieDetailsById } from './hooks/get-movie-details-by-id-hook';
import posterNotAvailable from '../images/movie-poster-not-available.jpeg';

function Movie({ movie }) {
	// Dialog box/Modal used to display details of movie
	const { Dialog, hide, show } = useDialog();
	const [loading, setLoading] = React.useState(false);
	const [movieDetails, setMovieDetails] = React.useState(null);
	const [error, setError] = React.useState(null);

	const searchDetailsById = useGetMovieDetailsById();

	// Fetch all additional movie properties by movie id
	const fetchMovieDetails = async () => {
		try {
			setLoading(true);
			const response = await searchDetailsById(movie.imdbID);
			// Show dialog box
			show();
			setLoading(false);
			setMovieDetails(response);
		} catch (error) {
			setError(error);
		}
	};

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<>
			{!loading ? (
				<div>
					<Dialog onClickOverlay={hide} movie={movieDetails} />
					<div className="rounded overflow-hidden shadow-lg movie hover:scale-110" onClick={fetchMovieDetails}>
						<img className="poster" src={movie.Poster !== 'N/A' ? movie.Poster : posterNotAvailable} alt="Poster" />
						{/* Displays full movie title in case it is cutoff */}
						<Tooltip content={`MOVIE TITLE: ${movie.Title}`} placement="top">
							<div className="flex justify-center mx-3 mt-3 ">
								<div className="text-md truncate">
									<strong>{movie.Title}</strong>
								</div>
							</div>
						</Tooltip>
						<div className="text-sm mx-3 mb-3 flex justify-center">{movie.Year}</div>
					</div>
				</div>
			) : (
				<div className="flex items-center">
					<Spinner />
				</div>
			)}
		</>
	);
}

export { Movie };
