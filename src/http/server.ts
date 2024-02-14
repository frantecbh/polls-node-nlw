import fasttify from 'fastify'
import z from 'zod'
import { prisma } from '../database/prisma'


const app = fasttify()


app.post('/polls', async (request, replay) =>{

  const createPollBody = z.object({
    title: z.string()
  })

 const {title} = createPollBody.parse(request.body)
  

 const poll = await prisma.poll.create({
  data:{
    title
  }
 })


  return replay.status(201).send({pollId: poll.id}) 
})


app.listen({port: 3333}).then(() => {
  console.log("Http server run on port 3333 ")
})