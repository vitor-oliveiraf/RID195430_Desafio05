import { PrismaClient } from "../../generated/prisma";

// Declaração global para TypeScript
declare global {
  var prisma: PrismaClient | undefined;
}

// Singleton pattern para garantir uma única instância do PrismaClient
let prisma: PrismaClient;

// Em desenvolvimento, criar nova instância se não existir
if (process.env.NODE_ENV === "production") {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
} else {
  // Em produção, sempre criar nova instância
  prisma = new PrismaClient();
}

export default prisma;
