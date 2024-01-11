import { FastifyReply, FastifyRequest } from "fastify";
import { getUsers } from "../services/user.service";
import { GetUserInput } from "../schemas/user.schema";

async function getUserHandler(
	request: FastifyRequest,
	reply: FastifyReply
) {
	return reply.send("single user");
}

async function getUsersHandler(request: FastifyRequest, reply: FastifyReply) {
	const users = await getUsers();
	return reply.send(users);
}

export { getUserHandler, getUsersHandler };
