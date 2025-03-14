import express from 'express';
import produtosRouter from './produtos';
import voosRouter from './voos';

// Create Express router
const router = express.Router();

// Use the router
router.use('/produtos', produtosRouter);
router.use('/voos', voosRouter);

router.get('/ping', (req, res) => {
    res.json({ pong: true });
});

router.get('/', (req, res) => {
    const name: string = 'Clarice';
    const age: number = 25;
    res.json({ name, age });
});

export default router;
