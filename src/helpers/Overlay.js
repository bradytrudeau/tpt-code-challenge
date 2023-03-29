import React from 'react';
import classnames from 'classnames';

function Overlay({ className, children, onClick }) {
	return (
		<div
			onClick={onClick}
			className={classnames('fixed', 'top-0', 'left-0', 'bottom-0', 'right-0', 'bg-black', 'z-999', className)}>
			{children}
		</div>
	);
}
export { Overlay };
