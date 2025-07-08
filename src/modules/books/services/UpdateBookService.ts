import BookRepository from "../repositories/BookRepository";

interface IUpdateBookService {
  title: string;
  pageCount: number;
  isbn: string;
  publisher: string;
}

// Update a book
export default function UpdateBookService(
  id: string,
  { title, pageCount, isbn, publisher }: IUpdateBookService
) {
  const bookRepository = BookRepository();
  return bookRepository.update(id, {
    id,
    title,
    pageCount,
    isbn,
    publisher,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}
