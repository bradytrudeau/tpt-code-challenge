import React from 'react';

const TextInput = React.forwardRef((props, ref, autoComplete = 'off') => {
	return (
		<input
			ref={ref}
			autoComplete={autoComplete}
			type="text"
			className="block appearance-none w-full border text-black py-2 px-3 pr-8 rounded leading-tight"
			{...props}
		/>
	);
});

export { TextInput };
