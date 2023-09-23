# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

## Prisma
> bunx prisma init --datasource-provider postgresql

> bunx prisma generate --schema=./src/external/prisma/schema.prisma

> bunx prisma migrate dev --name migration-name --schema=./src/external/prisma/schema.prisma

> yarn prisma studio --schema=./src/external/prisma/schema.prisma