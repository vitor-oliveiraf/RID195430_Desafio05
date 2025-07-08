import BookSchema from "@/modules/books/schemas/BookSquema";
import { NextFunction, Request, Response } from "express";

const validateBook = (req: Request, _res: Response, next: NextFunction) => {
  const bookSchema = BookSchema.parse(req.body);
  req.body = bookSchema;
  next();
};

const validateBookUpdate = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const bookSchema = BookSchema.partial().parse(req.body);
  req.body = bookSchema;
  next();
};

export default { validateBook, validateBookUpdate };
