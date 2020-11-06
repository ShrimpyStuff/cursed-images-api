import express from 'express';
import cors from 'cors';
import Routers from './routers';
import errorHandler from './middleware/error-handler';
import ejs from 'ejs';
import path from 'path';

const app = express();
const { PORT = 3000 } = process.env;

// Settings
app.set('json spaces', 2);
app.enable('trust proxy');

app.set('views', path.join(__dirname, '..', 'views'));
app.engine('html', ejs.renderFile);

// Middleware
app.use(express.static('public'));
app.use(cors());

// Routes
app.use('/api', Routers.API);
app.use('/', Routers.PAGES);

app.use(errorHandler);

app.listen(PORT, () => console.log(`App listening on port ${PORT}...`));
