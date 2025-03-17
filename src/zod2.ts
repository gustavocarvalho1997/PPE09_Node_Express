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
