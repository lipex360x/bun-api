import { Elysia } from 'elysia'

import { ListUsersController, RegisterUserController } from './adapters'
import { ListUsersUseCase, RegisterUserUseCase } from './core/user/usecases'
import { UserRepositoryPrisma } from './external/prisma'

const app = new Elysia()

const userRepository = new UserRepositoryPrisma()

const createUserUseCase = new RegisterUserUseCase(userRepository)
const listUsersUseCase = new ListUsersUseCase(userRepository)

new RegisterUserController(app, createUserUseCase)
new ListUsersController(app, listUsersUseCase)

app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
