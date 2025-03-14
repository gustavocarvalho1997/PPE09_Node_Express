import path from 'node:path';
import express from 'express';
import helmet from 'helmet';
import { notFoundRequest } from './routes/errorhandler';
import router from './routes/index';

// Create Express server
const server = express();

// Express configuration
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../public')));

// Use the router
server.use('/', router);
server.use(notFoundRequest);

// Start Express server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
