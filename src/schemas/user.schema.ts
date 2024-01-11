import { FastifySchema } from "fastify";
import { z } from "zod";

const getUserSchema = z.object({
	params: z.object({
		userId: z.string().email(),
	}),
});

type GetUserInput = z.infer<typeof getUserSchema>;

export { getUserSchema, GetUserInput };
