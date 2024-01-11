import Fastify from "fastify";
import autoload from "@fastify/autoload";
import path from "path";
import config from "./config/config";
import { logger } from "./utils/logger";
import { connectDb, handleSignals } from "./utils/startup";

async function initApp() {
	const app = Fastify();

	await app.register(autoload, {
		dir: path.join(__dirname, "plugins"),
	});

	await app.register(autoload, {
		dir: path.join(__dirname, "routes"),
	});

	return app;
}

async function startApp() {
	const app = await initApp();
	connectDb();

	try {
		app.listen({ port: config.port, host: config.host });
		handleSignals(app);
	} catch (error: any) {
		logger.error("Server shutting down");
		logger.error(`Error: ${error.message}`);
		process.exit(1);
	}
}

export { startApp };
