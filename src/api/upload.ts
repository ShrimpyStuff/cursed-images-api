import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
	const { url } = req.body;
	if (!url)
		return res.status(400).json({
			status: 400,
			message: 'Missing "url" property in request body.',
		});

	// Some upload system
});

export default router;
