import type { UserModel } from '@/core/user/model'
import type { IUserRepository } from '@/core/user/repositories'
import { PrismaClient } from '@prisma/client'

export class UserRepositoryPrisma implements IUserRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    })
  }

  async findById(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    })
  }

  async create(user: UserModel) {
    return this.prisma.user.create({ data: user })
  }

  async findAll(): Promise<UserModel[] | []> {
    return this.prisma.user.findMany()
  }
}
