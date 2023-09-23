import {
  ListUsersController,
  CreateUserController,
  RetrieveUserController,
} from './adapters'
import {
  ListUsersUseCase,
  CreateUserUseCase,
  RetrieveUserUseCase,
} from './core/modules/user/usecases'
import { app } from './external/api'
import { UserRepositoryPrisma } from './external/prisma'

const userRepository = new UserRepositoryPrisma()

const createUserUseCase = new CreateUserUseCase(userRepository)
const listUsersUseCase = new ListUsersUseCase(userRepository)
const retrieveUserUseCase = new RetrieveUserUseCase(userRepository)

new CreateUserController(app, createUserUseCase)
new ListUsersController(app, listUsersUseCase)
new RetrieveUserController(app, retrieveUserUseCase)

app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
