import express from 'express';
import upload from './upload';
import search from './search';

const router = express.Router();

router.use('/upload', upload);
router.use('/search', search);

router.get('/', (req, res) => {
	res.status(200).send('This is the main API endpoint :D');
});

export default router;
