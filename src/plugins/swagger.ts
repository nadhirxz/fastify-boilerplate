import fp from "fastify-plugin";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { jsonSchemaTransform } from "fastify-type-provider-zod";

const swagger = fp(function (app, _options, done) {
	app.register(fastifySwagger, {
		openapi: {
			info: {
				title: "SampleApi",
				description: "Sample backend service",
				version: "1.0.0",
			},
			servers: [],
		},
		transform: jsonSchemaTransform,
	});

	app.register(fastifySwaggerUi, {
		routePrefix: "/documentation",
	});

	done();
});

export default swagger;
