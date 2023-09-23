import { Elysia } from 'elysia'

import { RegisterUserController } from './adapters'
import { RegisterUserService } from './core/user/service'
import { InMemoryUserRepository } from './external/memory/user-repository.memory'

const app = new Elysia()

const userRepository = new InMemoryUserRepository()

const createUser = new RegisterUserService(userRepository)

// eslint-disable-next-line no-new
new RegisterUserController(app, createUser)

app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
