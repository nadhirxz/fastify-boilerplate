import fp from "fastify-plugin";
import {
	ZodTypeProvider,
	serializerCompiler,
	validatorCompiler,
} from "fastify-type-provider-zod";

const zod = fp(function (app, _options, done) {
	app.withTypeProvider<ZodTypeProvider>();
	app.setValidatorCompiler(validatorCompiler);
	app.setSerializerCompiler(serializerCompiler);
	done();
});

export default zod;
