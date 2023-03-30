import React from 'react';
import './App.css';
import { Search } from './search';
import { Movies } from './movies';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './api';

function App() {
	const [movieList, setMovieList] = React.useState(null);
	const [totalResults, setTotalResults] = React.useState(null);
	const [previousSearchTerm, setPreviousSearchTerm] = React.useState(null);
	const [isInitialSearch, setIsInitialSearch] = React.useState(false);

	return (
		<ApolloProvider client={apolloClient()}>
			{movieList ? (
				<Movies
					movies={movieList}
					setMovieList={setMovieList}
					totalResults={totalResults}
					previousSearchTerm={previousSearchTerm}
					setTotalResults={setTotalResults}
					setPreviousSearchTerm={setPreviousSearchTerm}
					setIsInitialSearch={setIsInitialSearch}
					isInitialSearch={isInitialSearch}
				/>
			) : (
				<Search
					setMovieList={setMovieList}
					setTotalResults={setTotalResults}
					setPreviousSearchTerm={setPreviousSearchTerm}
					setIsInitialSearch={setIsInitialSearch}
				/>
			)}
		</ApolloProvider>
	);
}

export default App;
