import React from 'react';
import Portal from './Portal';
import PropTypes from 'prop-types';

const getPoint = (el, tooltip, placement, space) => {
	const point = { x: 0, y: 0 };
	const elRect = el.getBoundingClientRect();

	switch (placement) {
		case 'left':
			point.x = elRect.left - (tooltip.offsetWidth + space);
			point.y = elRect.top + (el.offsetHeight - tooltip.offsetHeight) / 2;
			break;
		case 'right':
			point.x = elRect.right + space;
			point.y = elRect.top + (el.offsetHeight - tooltip.offsetHeight) / 2;
			break;
		case 'top':
			point.x = elRect.left + (el.offsetWidth - tooltip.offsetWidth) / 2;
			point.y = elRect.top - (tooltip.offsetHeight + space);
			break;
		default:
			point.x = elRect.left + (el.offsetWidth - tooltip.offsetWidth) / 2;
			point.y = elRect.bottom + space;
	}

	return point;
};

function Tooltip({ content, placement = 'bottom', space = 15, closeOnClick = true, children }) {
	const [show, setShow] = React.useState(0);
	const posRef = React.useRef({ x: 0, y: 0 });
	const tooltipRef = React.useRef();

	const handleMOver = (e) => {
		if (content) {
			setShow(1);
			posRef.current = getPoint(e.currentTarget, tooltipRef.current, placement, space);
		}
	};
	const handleMOut = () => {
		setShow(0);
	};

	const handleClick = () => {
		if (closeOnClick) {
			setShow(0);
		}
	};

	return (
		<div onClick={handleClick}>
			{React.cloneElement(children, { onMouseOver: handleMOver, onMouseOut: handleMOut })}
			<Portal>
				<span
					style={{
						position: 'fixed',
						top: `${posRef.current.y}px`,
						left: `${posRef.current.x}px`,
						zIndex: '99999',
						opacity: `${show}`,
						display: 'inline-block',
						whiteSpace: 'nowrap',
						pointerEvents: 'none',
						padding: '7px 10px',
						borderRadius: '4px',
						backgroundColor: '#3778BB',
						color: 'white',
						'font-family': 'Source Code Pro, monospace',
					}}
					ref={tooltipRef}>
					{content}
				</span>
			</Portal>
		</div>
	);
}

Tooltip.propTypes = {
	placement: PropTypes.string.isRequired,
	space: PropTypes.number,
};

export { Tooltip };
