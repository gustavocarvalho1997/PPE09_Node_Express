import type { ErrorRequestHandler, RequestHandler } from 'express';

export const notFoundRequest: RequestHandler = (req, res) => {
    res.status(404).json({ message: 'Not Found' });
};

export const errorhandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
}