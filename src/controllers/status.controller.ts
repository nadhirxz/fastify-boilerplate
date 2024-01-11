import { FastifyReply, FastifyRequest } from "fastify";

function getStatusHandler(_request: FastifyRequest, reply: FastifyReply) {
	return reply.code(200).send("OK");
}

export { getStatusHandler };
