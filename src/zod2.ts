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
    regra: z.string().regex(/[a-z]{2}/g),
});

// Alguns exemplos de validações numéricas que podem ser usadas
// com o Zod.
const exemplo5 = z.object({
    numero1: z.number().int().min(1).max(10),
    numero2: z.number().nonnegative(),
    numero3: z.number().positive(),
    numero4: z.number().negative(),
    numero5: z.number().nonpositive(),
    numero6: z.number().gt(10),
    numero7: z.number().lt(10),
    numero8: z.number().gte(10),
    numero9: z.number().lte(10),
    numero10: z.number().multipleOf(2),
});
