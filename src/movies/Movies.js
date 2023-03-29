import React from 'react';
import { Movie } from './Movie';
import ResponsivePagination from 'react-responsive-pagination';
import { useGetMovieByTitle } from './hooks/get-movie-by-title-hook';
import { Spinner } from '../helpers';

function Movies({ movies, setMovieList, totalResults, previousSearchTerm, setTotalResults, setPreviousSearchTerm }) {
	const searchByTitle = useGetMovieByTitle();
	const [currentPage, setCurrentPage] = React.useState(1);
	const [loading, setLoading] = React.useState(false);
	const pageSize = 10;
	const totalPages = Math.ceil(totalResults / pageSize);
	const onPageChange = async (value) => {
		setLoading(true);
		const response = await searchByTitle(previousSearchTerm, value);
		setCurrentPage(value);
		setMovieList(response.Movies);
		setTotalResults(response.TotalResults);
		setPreviousSearchTerm(response.SearchTerm);
		setLoading(false);
	};
	return (
		<>
			{!loading ? (
				<div className="movies">
					<div className="flex justify-center mt-24">
						<div className="container">
							<h1>
								<strong>Search Results:</strong>
							</h1>
						</div>
					</div>
					<div className="wrapper movieanimation">
						{movies.map((movie) => (
							<Movie movie={movie} />
						))}
					</div>
					<div className="container mt-12 movieanimation">
						<div className="my-4">
							<ResponsivePagination current={currentPage} total={totalPages} onPageChange={onPageChange} />
						</div>
						<button
							onClick={() => setMovieList(null)}
							className="border-black border-2 px-8 ml-2 rounded leading-tight h-10 bg-lightslategray-700 text-white hover:bg-blue-tpt mb-24">
							Search Again
						</button>
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

export { Movies };
