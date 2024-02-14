import fasttify from 'fastify'
import z from 'zod'
import { prisma } from '../database/prisma'
import { createPoll } from '../routes/create-poll'


const app = fasttify()

app.register(createPoll)





app.listen({port: 3333}).then(() => {
  console.log("Http server run on port 3333 ")
})