import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ??
    new PrismaClient({
        log: ['query', 'error', 'warn'],
        datasourceUrl: process.env.DATABASE_URL,
        connectionTimeout: 20000, // 20 seconds
        maxWait: 10000, // 10 seconds
        maxConnections: 5,
    })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma 