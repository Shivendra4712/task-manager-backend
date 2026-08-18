import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  async createGuestUser() {
    return prisma.user.create({ data: { isGuest: true } });
  }

  async getTasks(userId: string) {
    return prisma.task.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createTask(userId: string, data: { title: string; description?: string; status?: string; priority?: string }) {
    return prisma.task.create({
      data: { ...data, userId },
    });
  }

  async updateTask(id: string, userId: string, data: any) {
    const task = await prisma.task.findUnique({ where: { id } });
    if (!task || task.userId !== userId) throw new NotFoundException('Task not found');
    return prisma.task.update({ where: { id }, data });
  }

  async deleteTask(id: string, userId: string) {
    const task = await prisma.task.findUnique({ where: { id } });
    if (!task || task.userId !== userId) throw new NotFoundException('Task not found');
    await prisma.task.delete({ where: { id } });
    return { success: true };
  }
}
