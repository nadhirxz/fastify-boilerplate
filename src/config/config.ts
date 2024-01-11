import dotenv from "dotenv";
import path from "path";
import z from "zod";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const envVarsSchema = z.object({
	NODE_ENV: z.enum(["production", "developement", "test"]),

	PORT: z.preprocess((port) => parseInt(port as string), z.number()),

	HOST: z.string(),

	JWT_SECRET: z.string({ description: "JWT secret key" }),
	JWT_ACCESS_EXPIRATION_MINUTES: z.preprocess(
		(accessExpiration) => parseInt(accessExpiration as string),
		z.number({
			description: "minutes after which access tokens expire",
		})
	),

	JWT_REFRESH_EXPIRATION_DAYS: z.preprocess(
		(refreshExpiration) => parseInt(refreshExpiration as string),
		z.number({
			description: "days after which refresh tokens expire",
		})
	),

	JWT_RESET_PASSWORD_EXPIRATION_MINUTES: z.preprocess(
		(passwordResetExpiration) =>
			parseInt(passwordResetExpiration as string),
		z.number({
			description: "minutes after which reset password token expires",
		})
	),

	JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: z.preprocess(
		(verifyEmailExpiration) => parseInt(verifyEmailExpiration as string),
		z.number({
			description: "minutes after which verify email token expires",
		})
	),
});
// .strict();

const output = envVarsSchema.safeParse(process.env);

if (!output.success) {
	throw new Error(`Validation error: ${output.error.message}`);
}

const envVars = output.data;

export default {
	env: envVars.NODE_ENV,
	port: envVars.PORT,
	host: envVars.HOST,
	jwt: {
		secret: envVars.JWT_SECRET,
		accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
		refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
		resetPasswordExpirationMinutes:
			envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
		verifyEmailExpirationMinutes:
			envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
	},
};
