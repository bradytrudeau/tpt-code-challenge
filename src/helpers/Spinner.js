import React, { useState, useEffect } from 'react';

import { ReactComponent as ThreeDotsSVG } from '../images/three-dots.svg';
import './Spinner.css';

function Spinner({ useTimeout = true, reduceSize = false }) {
	const [showSpinner, setShowSpinner] = useState(false);

	useEffect(() => {
		if (useTimeout) {
			const timeoutID = setTimeout(() => {
				setShowSpinner(true);
			}, 900);

			return () => {
				clearTimeout(timeoutID);
			};
		} else {
			setShowSpinner(true);
		}
	}, [useTimeout, setShowSpinner]);

	if (showSpinner) {
		return <ThreeDotsSVG height={reduceSize ? '0.5em' : '1em'} className="spinner" />;
	}

	return null;
}

export { Spinner };
