import fastify from "fastify"
import { PrismaClient } from "@prisma/client"
import { z } from "zod"

//quando o usuário acessar o endereço /hello, queremos executar a função abaixo
/*app.get('/hello', () => {
    return 'Hello NLW'
})

//ouvir a porta 3333 e quando o server entrar no ar, será exibida a mensagem abaixo
app.listen({port: 3333}).then(() => {
    console.log('HTTP server running on http://localhost:3333')
})*/

const app = fastify()

//conexão feita com o banco de dados
const prisma = new PrismaClient()


app.post('/polls', async (request, reply) => {
    const createPollBody = z.object({
        title : z.string()
    })

    const { title } = createPollBody.parse(request.body)

    const poll = await prisma.poll.create({
        data: {
            title,
        }
    })

    return reply.status(201).send({pollId: poll.id})
})

