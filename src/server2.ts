import express from 'express';
import z from 'zod';
import { postsSchema } from './schemas/postsSchema';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
    res.send('Hello World');
});

server.post('/user', (req, res) => {
    const userSchema = z.object({
        name: z.string().min(3).max(50),
        email: z.string().email(),
        age: z.number().min(18).max(100),
    });

    const result = userSchema.safeParse(req.body);

    if (!result.success) {
        res.status(400).send(result.error.issues.map(issue => issue.message));
        return;
    }

    const { name, email, age } = result.data;

    // processo
    console.log(name, email, age);

    res.status(201).json({ message: 'Usuário criado com sucesso' });
});

server.get('/posts', async (req, res) => {
    const request = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await request.json();

    const result = postsSchema.safeParse(data);

    if (!result.success) {
        res.status(400).send(result.error.issues.map(issue => issue.message));
        return;
    }

    const totalPosts = result.data.length;

    res.json({ total: totalPosts });
});

server.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
