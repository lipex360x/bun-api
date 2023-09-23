import type { User } from '@/core/user/model'
import type { IUserRepository } from '@/core/user/repositories'
import { PrismaClient } from '@prisma/client'

export class UserRepositoryPrisma implements IUserRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async retrieveByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    })
  }

  async create(user: User) {
    return this.prisma.user.create({ data: user })
  }

  async findAll(): Promise<User[] | []> {
    return this.prisma.user.findMany()
  }
}
