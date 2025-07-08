import { Router } from "express";
import BookController from "../controllers/BookController";

const routes = Router();

const bookController = BookController();

routes.post("/", bookController.create);
routes.get("/", bookController.list);
routes.get("/:id", bookController.show);
routes.put("/:id", bookController.update);
routes.delete("/:id", bookController.delete);

export default routes;
