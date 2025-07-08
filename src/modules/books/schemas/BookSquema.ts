import { z } from "zod";

const BookSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, "Título é obrigatório"),
  pageCount: z.number().min(1, "Número de páginas inválido"),
  isbn: z.string().min(1, "ISBN é obrigatório"),
  publisher: z.string().min(1, "Editora é obrigatório"),
});

export default BookSchema;
