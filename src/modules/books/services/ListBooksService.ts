import BookRepository from "../repositories/BookRepository";

// List all books
export default function ListBooksService() {
  const bookRepository = BookRepository();
  return bookRepository.findAll();
}
