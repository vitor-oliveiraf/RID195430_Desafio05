import { Router } from "express";
import bookRoutes from "@/modules/books/routes/BookRoutes";

const routes = Router();

routes.get("/health", (req, res) => {
  res.status(200).json({ message: "Hello dev, i'm running" });
});

routes.use("/livros", bookRoutes);

export default routes;
