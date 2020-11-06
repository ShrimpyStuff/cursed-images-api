import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	console.error(err);
	res.status(500).json({
		status: 500,
		error: err.message || '[no error message]',
	});
};

export default errorHandler;
