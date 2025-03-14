import type { RequestHandler } from "express";

export const myLogger: RequestHandler = (req, res, next) => {
    const logged: boolean = true;
    if (logged) {
        console.log('LOGGED');
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};