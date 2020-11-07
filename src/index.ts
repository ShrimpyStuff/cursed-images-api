import express from 'express';
import cors from 'cors';
import errorHandler from './middleware/error-handler';
import ejs from 'ejs';
import path from 'path';
import api from './api';

const app = express();
const { PORT = 3000 } = process.env;

// Settings
app.set('json spaces', 2);
app.enable('trust proxy');

app.set('views', path.join(__dirname, '..', 'views'));
app.engine('html', ejs.renderFile);

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', api);
app.get('/help', (req, res) => res.render('help.html'));
app.get('/about', (req, res) => res.render('about.html'));
app.get('/', (req, res) => res.render('index.html'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`App listening on port ${PORT}...`));
