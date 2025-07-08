import { Book, PrismaClient } from "@/generated/prisma";

export default function BookRepository() {
  const prisma = new PrismaClient();

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
