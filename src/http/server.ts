import fasttify from 'fastify'

import { createPoll } from '../routes/create-poll'
import { getPoll } from '../routes/get-polls'
import { voteOnPoll } from '../routes/vote-on-poll'
import cookie from '@fastify/cookie'

const app = fasttify()

app.register(cookie, {
  secret: 'matheusminhavidameuamor', // for cookies signature
  hook: 'onRequest', // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
})

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({ port: 3333 }).then(() => {
  console.log('Http server run on port 3333 ')
})
