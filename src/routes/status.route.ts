import { FastifyInstance } from "fastify";
import { getStatusHandler } from "../controllers/status.controller";

async function routes(app: FastifyInstance) {
	app.route({
		method: "GET",
		url: "/",
		handler: getStatusHandler,
	});
}

export const autoPrefix = "/status";
export default routes;
