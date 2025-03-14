import express from 'express';

const router = express.Router();

router.get('/:from/:to', (req, res) => {
    const { from, to } = req.params;
    res.json({
        flights: {
            from: from.toUpperCase(),
            to: to.toUpperCase(),
            price: 100,
        },
    });
});

export default router;
