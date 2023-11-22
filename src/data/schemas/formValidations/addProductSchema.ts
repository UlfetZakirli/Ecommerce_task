import { z } from 'zod'

export const addProductSchema = z.object({
    id: z.number().optional(),
    price: z.number().min(1, 'Price is required!'),
    description: z.string().min(1, "Description is required!").min(10).max(300),
    isNew: z.boolean(),
    category: z.string().min(1, 'Category is required!')
})