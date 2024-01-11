import { FastifyInstance } from "fastify";
import {
	getUserHandler,
	getUsersHandler,
} from "../controllers/user.controller";
import { getUserSchema } from "../schemas/user.schema";

async function routes(app: FastifyInstance) {
	app.route({
		method: "GET",
		schema: getUserSchema,
		url: "/:userEmail",
		handler: getUserHandler,
	});

	app.route({
		method: "GET",
		url: "/",
		handler: getUsersHandler,
	});
}

export const autoPrefix = "/users";
export default routes;
