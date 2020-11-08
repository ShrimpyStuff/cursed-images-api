import express from 'express';
import fs from 'fs';

const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).json({
		status: 200,
		message: 'Go to /search',
	});
});

router.get('/search', (req, res) => {
	const images = fs.readdirSync('./public/images');

	res.status(200).json({
		status: 200,
		url: `${req.protocol}://${req.get('host')}/images/${images[
			Math.floor(Math.random() * images.length)
		].replace(/\\/g, '/')}`,
	});
});

export default router;
