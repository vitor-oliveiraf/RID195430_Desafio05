import express from "express";
import cors from "cors";
import "express-async-errors";
import routes from "./routes";
import dotenv from "dotenv";
import { PrismaClient } from "../../generated/prisma";
import ErrorHandleMiddleware from "../middlewares/ErrorHandleMiddleware";
import ValidationMiddlewares from "../middlewares/ValidationMiddlewares";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

// Função para verificar se o banco está funcionando
async function checkDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Banco de dados conectado com sucesso!");

    // Teste adicional: fazer uma query simples
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log("✅ Query de teste executada com sucesso:", result);
  } catch (error) {
    console.error("❌ Erro ao conectar com o banco de dados:", error);
    process.exit(1);
  }
}

app.use(cors());
app.use(express.json());

app.use(routes);

// Middleware de erro deve ser o último
app.use(ErrorHandleMiddleware.handleError);

app.listen(process.env.PORT, async () => {
  console.log(`✅ Servidor rodando na porta ${process.env.PORT}`);

  // Verificar conexão com o banco
  await checkDatabaseConnection();
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
