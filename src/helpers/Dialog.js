import React from 'react';
import PropTypes from 'prop-types';
import { Overlay } from './Overlay';
import { animated, useTransition } from 'react-spring';
import { AiFillCloseSquare } from 'react-icons/ai';
import posterNotAvailable from '../images/movie-poster-not-available.jpeg';
import { Tooltip } from './Tooltip';

function Dialog({ show = false, movie, onClickOverlay = (f) => f }) {
	const transition = useTransition(show, {
		from: { opacity: 0.3 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		reverse: show,
	});
	// Check to see if the user is on a mobile device or not
	const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	console.log({ isMobile });

	return (
		show &&
		transition((styles) => {
			return (
				<>
					{/* Overlay used to darken movie images in background while allowing user to click it to close dialog box */}
					<Overlay className="bg-lightslategray-900 bg-opacity-50 z-50" onClick={onClickOverlay}>
						<animated.div style={styles}>
							{/* Render different dialog component depending on what device is being used */}
							{!isMobile ? (
								<div className="modal">
									<div className="modal-image">
										<img src={movie.Poster !== 'N/A' ? movie.Poster : posterNotAvailable} alt="poster" />
									</div>
									<div className="modal-text min-w-0">
										<h2 className="truncate">
											<Tooltip content={movie.Title} placement="top">
												<strong>{movie.Title}</strong>
											</Tooltip>
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
									<div className="text-2xl h-fit hover:cursor-pointer hover:text-blue-tpt" onClick={onClickOverlay}>
										<AiFillCloseSquare />
									</div>
								</div>
							) : (
								<div className="mobile-modal">
									<div
										className="text-xl flex justify-end hover:cursor-pointer hover:text-blue-tpt"
										onClick={onClickOverlay}>
										<AiFillCloseSquare />
									</div>
									<div className="mobile-modal-image mx-auto">
										<img src={movie.Poster !== 'N/A' ? movie.Poster : posterNotAvailable} alt="poster" />
									</div>
									<div className="mobile-modal-text min-w-0">
										<Tooltip content={`MOVIE TITLE: ${movie.Title}`} placement="top">
											<div className="flex justify-center mx-3">
												<div className="text-sm truncate">
													<strong>{movie.Title}</strong>
												</div>
											</div>
										</Tooltip>
										<p className="text-xs my-2">
											{movie.Year} • {movie.Rated} • {movie.Runtime} • {movie.Genre}
										</p>
										<p className="text-xs">{movie.Plot}</p>
										<p className="text-xs my-2">
											<strong>Starring: </strong>
											{movie.Actors}
										</p>
										<p className="text-sm">
											<strong>Awards: </strong>
											{movie.Awards}
										</p>
									</div>
								</div>
							)}
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
