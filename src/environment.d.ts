declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: string;

			PORT: number;
			HOST: string;

			DATABASE_URL: string;

			JWT_SECRET: string;
			JWT_ACCESS_EXPIRATION_MINUTES: number;
			JWT_REFRESH_EXPIRATION_DAYS: number;
			JWT_RESET_PASSWORD_EXPIRATION_MINUTES: number;
			JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: number;
		}
	}
}

export {};
