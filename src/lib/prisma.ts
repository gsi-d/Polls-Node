import { PrismaClient } from "@prisma/client";

//conexão feita com o banco de dados
export const prisma = new PrismaClient({
    log: ['query']
})