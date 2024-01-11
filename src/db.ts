import { PrismaClient } from "@prisma/client";

interface NodeJsGlobal extends Global {
	prisma: PrismaClient;
}
declare const global: NodeJsGlobal;

if (!global.prisma) {
	global.prisma = new PrismaClient();
}

export default global.prisma;
