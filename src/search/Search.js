import React from 'react';
import { TextInput } from '../helpers';
import { Spinner } from '../helpers/Spinner';
import { useGetMovieByTitle } from '../movies/hooks/get-movie-by-title-hook';
import logo from '../images/tpt-logo-png-transparent.png';

function Search({ setMovieList, setTotalResults, setPreviousSearchTerm, setIsInitialSearch }) {
	const [searchValue, setSearchValue] = React.useState('');
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);

	const searchByTitle = useGetMovieByTitle();

	const onEnter = async () => {
		try {
			setLoading(true);
			const response = await searchByTitle(searchValue);
			setSearchValue('');
			setMovieList(response.Movies);
			setTotalResults(response.TotalResults);
			setPreviousSearchTerm(response.SearchTerm);
			setIsInitialSearch(true);
			setLoading(false);
		} catch (error) {
			setError(error);
		}
	};

	const onChange = (event) => {
		setSearchValue(event.target.value);
	};

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<>
			<div className="search">
				<div className="flex mt-40 justify-center">
					<img src={logo} alt="TPT" className="h-48" />
				</div>
				<div className="flex justify-center text-3xl mb-12 font-mono italic font-bold">Code Challenge</div>
				<div className="flex justify-center">
					{!loading ? (
						<form onSubmit={onEnter} className="flex items-center mx-4">
							<div>
								<TextInput
									value={searchValue}
									onChange={onChange}
									placeholder={'🔍 Search...'}
									className="border-black border-2 py-2 px-3 pr-8 rounded leading-tight my-0"
								/>
							</div>
							<div>
								<button
									className="border-black border-2 px-8 ml-2 rounded leading-tight h-10 bg-lightslategray-500 text-white hover:bg-blue-tpt"
									onClick={onEnter}>
									Search
								</button>
							</div>
						</form>
					) : (
						<div className="flex items-center">
							<Spinner />
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export { Search };
