import fasttify from 'fastify'

const app = fasttify()


app.get('/hello', () =>{
  return 'ola frantec!'
})


app.listen({port: 3333}).then(() => {
  console.log("Http server run on port 3333 ")
})