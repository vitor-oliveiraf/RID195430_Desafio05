import express from "express";
import cors from "cors";
import "express-async-errors";
import routes from "./routes";
import dotenv from "dotenv";
import prisma from "../database/prisma";
import ErrorHandleMiddleware from "../middlewares/ErrorHandleMiddleware";
import ValidationMiddlewares from "../middlewares/ValidationMiddlewares";

dotenv.config();

const app = express();

// Função para verificar se o banco está funcionando
async function checkDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Banco de dados conectado com sucesso!");

    // Em desenvolvimento, não executar query de teste para evitar conflitos
    if (process.env.NODE_ENV !== "development") {
      const result = await prisma.$queryRaw`SELECT 1 as test`;
      console.log("✅ Query de teste executada com sucesso:", result);
    }
  } catch (error) {
    console.error("❌ Erro ao conectar com o banco de dados:", error);
    // Em desenvolvimento, encerrar o processo. Em produção, apenas logar o erro
    if (process.env.NODE_ENV === "development") {
      process.exit(1);
    }
  }
}

app.use(cors());
app.use(express.json());

// Rota de health check para o Render
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

app.use(routes);

// Middleware de erro deve ser o último
app.use(ErrorHandleMiddleware.handleError);

const PORT = parseInt(process.env.PORT || "3333", 10);

app.listen(PORT, "0.0.0.0", async () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);

  // Verificar conexão com o banco
  await checkDatabaseConnection();
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
