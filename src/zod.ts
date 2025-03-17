import z from 'zod';

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(120),
});

const data = {
    name: 'Clarice',
    email: 'teste@email.com.br',
    age: 25,
};

const result = schema.safeParse(data);

console.log(result);

if (result.success) {
    console.log(result.data);
} else {
    console.log(result.error.errors);
}
