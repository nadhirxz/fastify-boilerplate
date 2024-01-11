import db from "../db";

async function getUsers() {
	const users = db.user.findMany();
	return await users;
}

export { getUsers };
