import { Book } from "@/generated/prisma";
import prisma from "@/shared/database/prisma";

export default function BookRepository() {
  return {
    create: async (data: Book) => {
      return prisma.book.create({ data });
    },
    findAll: async () => {
      return prisma.book.findMany();
    },
    findById: async (id: string) => {
      return prisma.book.findUnique({ where: { id } });
    },
    update: async (id: string, data: Book) => {
      return prisma.book.update({ where: { id }, data });
    },
    delete: async (id: string) => {
      return prisma.book.delete({ where: { id } });
    },
  };
}
