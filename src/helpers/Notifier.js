import { toast } from 'react-toastify';

const defaultOpts = {
	position: 'bottom-right',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
};

function buildOpts(opts) {
	return { ...defaultOpts, ...opts };
}

const Notifier = {
	error(message, opts = {}) {
		toast.error(message, buildOpts(opts));
	},
	warn(message, opts = {}) {
		toast.warn(message, buildOpts(opts));
	},
	success(message, opts = {}) {
		toast.success(message, buildOpts(opts));
	},
};

export { Notifier };
