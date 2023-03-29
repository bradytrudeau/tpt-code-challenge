import React from 'react';
import { useApolloClient } from '@apollo/client';
import { Notifier } from '../Notifier';

function useQueryWithErrorHandling() {
	const defaultErrorMessage = 'Request error. See console for more details.';
	const apolloClient = useApolloClient();

	const execMutation = React.useCallback(
		async (queryOpts, errorMessage) => {
			try {
				const response = await apolloClient.query(queryOpts);

				if (response.errors) {
					Notifier.error(errorMessage ?? defaultErrorMessage);
					console.error(response.errors);
				}

				return response;
			} catch (error) {
				Notifier.error(errorMessage ?? defaultErrorMessage);
				console.error(error);
			}
		},
		[apolloClient]
	);

	return execMutation;
}

export { useQueryWithErrorHandling };
