import { FastifyInstance } from "fastify";
import { logger } from "./logger";
import db from "../db";

async function connectDb() {
	try {
		await db.$connect();
	} catch (error: any) {
		logger.error(`Database connection failed: ${error.message}`);
		process.exit(1);
	}
	logger.info("Database connected");
}

function handleSignals(app: FastifyInstance) {
	for (const signal of ["SIGINT", "SIGTERM"]) {
		process.on(signal, () =>
			app.close().then((error) => {
				logger.info(`close application on ${signal}`);
				process.exit(error ? 1 : 0);
			})
		);
	}
}

export { connectDb, handleSignals };
