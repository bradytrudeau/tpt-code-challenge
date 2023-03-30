import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const { REACT_APP_GQL_API_BASE_URL: apiBaseUrl, NODE_ENV } = process.env;

function apolloClient() {
	const httpLink = createHttpLink({
		uri: `${apiBaseUrl}/graphql`,
	});

	return new ApolloClient({
		cache: new InMemoryCache(),
		link: httpLink,
		connectToDevTools: NODE_ENV !== 'production',
		defaultOptions: {
			query: {
				fetchPolicy: 'no-cache',
			},
		},
	});
}

export { apolloClient };
