import z from 'zod'
import { prisma } from '../database/prisma'
import { FastifyInstance } from 'fastify'

export async function getPoll(app: FastifyInstance) {
  app.get('/polls/:pollId', async (request, replay) => {
    const getPollParams = z.object({
      pollId: z.string().uuid(),
    })

    const { pollId } = getPollParams.parse(request.params)

    const poll = await prisma.poll.findUnique({
      where: {
        id: pollId,
      },
      include: {
        options: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    })

    return replay.send({ poll })
  })
}
