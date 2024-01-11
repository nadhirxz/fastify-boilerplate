import fp from "fastify-plugin";
import { logger } from "../utils/logger";
import config from "../config/config";

const hooks = fp(function (app, options, done) {
	app.addHook("onReady", (done) => {
		logger.info("application initialized");
		done();
	});

	app.addHook("onListen", (done) => {
		logger.info(`server listening on port ${config.port}`);
		done();
	});

	app.addHook("onRegister", (_app, options) => {
		logger.info(`plugin: ${options.prefix}`);
	});

	done();
});

export default hooks;
