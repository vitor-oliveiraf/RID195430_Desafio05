import { Request, Response } from "express";
import CreateBookService from "../services/CreateBookService";
import ListBooksService from "../services/ListBooksService";
import ShowBookService from "../services/ShowBookService";
import UpdateBookService from "../services/UpdateBookService";
import DeleteBookService from "../services/DeleteBookService";

export default function BookController() {
  return {
    create: async (req: Request, res: Response) => {
      const { title, pageCount, isbn, publisher } = req.body;
      const book = await CreateBookService({
        title,
        pageCount,
        isbn,
        publisher,
      });
      res.status(201).json(book);
    },
    list: async (req: Request, res: Response) => {
      const books = await ListBooksService();
      res.status(200).json(books);
    },
    show: async (req: Request, res: Response) => {
      const { id } = req.params;
      const book = await ShowBookService(id);
      res.status(200).json(book);
    },
    update: async (req: Request, res: Response) => {
      const { id } = req.params;
      const { title, pageCount, isbn, publisher } = req.body;
      const book = await UpdateBookService(id, {
        title,
        pageCount,
        isbn,
        publisher,
      });
      res.status(200).json(book);
    },
    delete: async (req: Request, res: Response) => {
      const { id } = req.params;
      await DeleteBookService(id);
      res.status(204).send();
    },
  };
}
