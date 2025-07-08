import BookRepository from "../repositories/BookRepository";
import { randomUUID } from "crypto";

interface ICreateBookService {
  title: string;
  pageCount: number;
  isbn: string;
  publisher: string;
}

export default function CreateBookService({
  title,
  pageCount,
  isbn,
  publisher,
}: ICreateBookService) {
  const bookRepository = BookRepository();

  const book = bookRepository.create({
    id: randomUUID(),
    title,
    pageCount,
    isbn,
    publisher,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return book;
}
