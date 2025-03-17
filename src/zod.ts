import z from 'zod';

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(120),
    status: z.boolean(),
    characteristics: z.array(
        z.object({
            name: z.string(),
            value: z.number(),
        })
    ),
});

type User = z.infer<typeof schema>;

const data: User = {
    name: 'Clarice',
    email: 'teste@email.com.br',
    age: 25,
    status: true,
    characteristics: [
        { name: 'Height', value: 1.8 },
        { name: 'Shoe size', value: 42 },
    ],
};

const result = schema.safeParse(data);

console.log(result);

if (result.success) {
    console.log(result.data);
} else {
    console.log(result.error.errors);
}
