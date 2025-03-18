import { z } from 'zod';

// Alguns exemplos de tipos de dados que podem ser usados
// com o Zod.
const exemplo1 = z.object({
    name: z.string(),
    age: z.number(),
    active: z.boolean(),
    birthDate: z.date(),
    qualquer: z.any(),
    nunca: z.never(),
    nulo: z.null(),
    indefinido: z.undefined(),
});

// Alguns exemplos de tipos de dados opcionais que podem ser usados
// com o Zod.
const exemplo2 = z.object({
    name: z.string().optional(),
    age: z.number().optional(),
    active: z.boolean().optional(),
});

// Alguns exemplos de tipos de dados literais que podem ser usados
// com o Zod.
const exemplo3 = z.object({
    name: z.literal('Clarice'),
    age: z.literal(25),
});

// Alguns exemplos de tipos de dados com validações que podem ser usados
// com o Zod.
const exemplo4 = z.object({
    name: z.string().min(3).max(50),
    age: z.number().int().positive().min(18).max(100),
    url: z.string().url(),
    email: z.string().email(),
    emoji: z.string().emoji(),
    uuid: z.string().uuid(),
    ip: z.string().ip(),
    imagem: z.string().endsWith('.jpg'),
    regra: z.string().regex(/[a-z]{2}/g)
});
