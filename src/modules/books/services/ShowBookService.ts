import BookRepository from "../repositories/BookRepository";

export default function ShowBookService(id: string) {
  const bookRepository = BookRepository();
  return bookRepository.findById(id);
}
