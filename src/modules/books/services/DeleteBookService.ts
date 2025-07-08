import BookRepository from "../repositories/BookRepository";

export default function DeleteBookService(id: string) {
  const bookRepository = BookRepository();
  return bookRepository.delete(id);
}
