import React from 'react';
import PropTypes from 'prop-types';
import { Overlay } from './Overlay';
import { animated, useTransition } from 'react-spring';

function Dialog({ show = false, movie, onClickOverlay = (f) => f }) {
	const transition = useTransition(show, {
		from: { opacity: 0.3 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		reverse: show,
	});

	return (
		show &&
		transition((styles) => {
			return (
				<>
					<Overlay className="bg-lightslategray-900 bg-opacity-50 z-50" onClick={onClickOverlay}>
						<animated.div style={styles}>
							<div className="modal">
								<div className="modal-image">
									<img src={movie.Poster} alt="poster" />
								</div>
								<div className="modal-text">
									<h2>
										<strong>{movie.Title}</strong>
									</h2>
									<p className="text-xs my-2">
										{movie.Year} • {movie.Rated} • {movie.Runtime} • {movie.Genre}
									</p>
									<p className="text-sm">{movie.Plot}</p>
									<p className="text-sm my-2">
										<strong>Starring: </strong>
										{movie.Actors}
									</p>
									<p className="text-sm">
										<strong>Awards: </strong>
										{movie.Awards}
									</p>
								</div>
							</div>
						</animated.div>
					</Overlay>
				</>
			);
		})
	);
}

Dialog.propTypes = {
	show: PropTypes.bool,
	title: PropTypes.any,
	width: PropTypes.string,
	onClickOverlay: PropTypes.func,
};

function useDialog() {
	const [isShowing, setShowing] = React.useState(false);

	const show = React.useCallback(() => {
		setShowing(true);
	}, []);

	const hide = React.useCallback(() => {
		setShowing(false);
	}, []);

	function Component(props) {
		return <Dialog show={isShowing} {...props} />;
	}

	return {
		Dialog: Component,
		show,
		hide,
	};
}

export { Dialog, useDialog };
